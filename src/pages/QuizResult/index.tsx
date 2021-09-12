import { Fragment, useState, useEffect,useContext } from "react";
import { useHistory } from "react-router-dom";
import clsx from 'clsx';
import Container from "@material-ui/core/Container/Container";
import Card from "@material-ui/core/Card/Card";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent/CardContent";
import Button from "@material-ui/core/Button/Button";
import Typography from "@material-ui/core/Typography/Typography";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from "@material-ui/core/Paper";

import useStyles from "./styles";

import { LocalStorageContext } from "shared/contexts/LocalStorageContext";
import { IAnswerStorage } from "shared/interfaces/AnswerStorage";

export function QuizResult() {

  const classes = useStyles();
  const history = useHistory();
  const [result, setResult] = useState<IAnswerStorage>();
  const { getQuizFromLocalStorage } = useContext(LocalStorageContext);

  const loadDataFromLocalStorage = () => {
    const data = getQuizFromLocalStorage();
    if (data) {
      setResult(data);
    }
  };

  useEffect(() => {
    loadDataFromLocalStorage();
    document.title = "Result";
  }, []);

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography component="h4" variant="h4" className={classes.title}>
            Final Result
        </Typography>
        {result ? (
          <Fragment>
            <Typography component="h5" variant="h5" className={classes.subtitle}>
              You got {" "}
              <Typography 
                component="span"
                variant="h5"
                className={classes.textImportant}
              >
                { result.hits } {" "}
              </Typography>
              out of {" "}
              <Typography 
                component="span"
                variant="h5"
                className={classes.textImportant}
              >
                { result.hits + result.errors } {" "}
              </Typography>
              questions right
            </Typography>
          
          <Paper elevation={0} className={classes.paperContent}>
            {
              result.questions.map((question, index) => (
                <Paper key={question.question} className={classes.paperItem} elevation={1}>
                  <Typography
                    component="h6"
                    variant="h6"
                    className={clsx(
                      classes.answerTitle,
                      question.selectedAnswer === question.correctAnswer 
                        ?
                        classes.correctQuestion
                        :
                        classes.incorrectQuestion
                    )}
                  > 
                    { index + 1 } - { question.question }
                  </Typography>
                  <Paper elevation={0} className={classes.answersPaper}>
                  <Typography component="span">
                    <Typography component="span" className={classes.textImportant}>
                      Your question:
                    </Typography>
                    {" "}
                    { question.selectedAnswer }
                  </Typography>
                  <Typography component="span">
                    <Typography component="span" className={classes.textImportant}>
                      Correct question:
                    </Typography>
                    {" "}
                    { question.selectedAnswer }
                  </Typography>
                  </Paper>
                </Paper>
              ))
            }
          </Paper>
          </Fragment>
        ) : (
        <Typography>There are no results to show!</Typography>
        ) 
      }

      <Button 
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
        className={classes.button}
      >
        Back to home
      </Button>
      </Paper>
    </Container>
  );
}