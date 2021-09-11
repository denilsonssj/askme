import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Container from "@material-ui/core/Container";

import api from "core/services/apiService";
import useStyles from "./styles";
import { QuizConfirmation } from "./components/QuizConfirmation";
import { QuizContainer } from "./components/QuizContainer";
import { QuizLoading } from "./components/QuizLoading";
import { parseHtmlToString } from "shared/utils/parseHtmlToString";
import { IQuestionResponse } from "shared/interfaces/IQuestionResponse";
import { IQuestionStorage, IAnswerStorage } from "shared/interfaces/AnswerStorage";

interface IQuestionProps extends Omit<IQuestionResponse, "incorrect_answers" | "correct_answer"> {
  correctAnswer: string;
  answers: string[];
};

enum State {
  LOADING = "LOADING",
  LOADED = "LOADED",
  CONFIRM = "CONFIRM",
  FINALIZED = "FINALIZED",
};

export function QuizPage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation<{ amount: string }>();
  const [allQuestions, setAllQuestions] = useState<IQuestionProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentquestion, setCurrentQuestion] = useState<IQuestionProps>();
  const [state, setState] = useState<string>(State.LOADING);

  const saveLocalStorage = () => {
    const data: IAnswerStorage = {
      errors: 0,
      hits: 0,
      isFinalized: false,
      questions: allQuestions.map(({ question, correctAnswer }) => {
        return {
          question,
          correctAnswer,
          selectedAnswer: "",
          isFinalized: false
        };
      })
    };
    localStorage.setItem("app-askme:quiz", JSON.stringify(data));
  }

  const handleClickStartButton = async (): Promise<void> => {
    const { amount } = location.state;
    if (amount) {
      setState(State.LOADING);
      const response = await api.get("", { params: { amount }});
      if (response.status === 200) {
        const { data } = response;
        const formatedQuestions: IQuestionProps[] = (data.results as IQuestionResponse[]).map((question: IQuestionResponse) => {
          const allAnswersFormated = [...question.incorrect_answers, question.correct_answer]
            .map(answer => parseHtmlToString(answer))
            .sort((a,b) => a.localeCompare(b))
          return {
            type: question.type,
            category: question.category,
            difficulty: question.difficulty,
            question: parseHtmlToString(question.question),
            correctAnswer: parseHtmlToString(question.correct_answer) as string,
            answers: allAnswersFormated
          };
        });
        setState(State.LOADED);
        setAllQuestions(formatedQuestions);
        setCurrentQuestion(formatedQuestions[currentIndex]);
      }
    }
  }

  const handleClickContinueButton = (questionTitle: string, selectedAnswer: string, correctAnswer: string) => {
    const newCurrentIndex = currentIndex + 1;
    const data = localStorage.getItem("app-askme:quiz");
    if (data) {
      const storedData = JSON.parse(data) as IAnswerStorage;
      storedData.isFinalized = newCurrentIndex === storedData.questions.length ? true : false;
      if (selectedAnswer === correctAnswer) {
        storedData.hits++;
      }
      else {
        storedData.errors++;
      }
      const updatedQuestions = storedData.questions.map((question: IQuestionStorage) => {
        if (question.question === questionTitle) {
          return {
            ...question,
            selectedAnswer,
            isFinalized: true
          };
        }
        else {
          return {
            ...question
          };
        }
      });
      storedData.questions = updatedQuestions;
      localStorage.setItem("app-askme:quiz", JSON.stringify(storedData));
    }
    if(newCurrentIndex < allQuestions.length) {
      setCurrentQuestion(allQuestions[newCurrentIndex]);
      setCurrentIndex(newCurrentIndex);
    } 
    else {
      setState(State.FINALIZED);
    }
  }

  useEffect(() => {
    document.title = "Questions";
    setState(State.CONFIRM);
  }, []);

  useEffect(() => {
    if (allQuestions.length !== 0) {
      saveLocalStorage();
    }
  }, [allQuestions]);

  useEffect(() => {
    if (state === State.FINALIZED) {
      history.push("/quiz/result");
    }
  }, [state, history]);

  useEffect(() => {
    if (!location.state) {
      history.push("/");
    }
  }, [location, history]);

  return (
    <Container maxWidth="md" className={classes.root}>
      { state === State.LOADING && <QuizLoading /> }
      { state === State.CONFIRM && (
          <QuizConfirmation 
            handleClickStartButton={handleClickStartButton} 
          />
        )
      }
      { state === State.LOADED && currentquestion
        && 
        <QuizContainer
          question={currentquestion}
          currentQuestionNumber={currentIndex + 1}
          totalQuestions={allQuestions.length}
          handleClickContinueButton={handleClickContinueButton}
        />
      }
    </Container>
  );
}