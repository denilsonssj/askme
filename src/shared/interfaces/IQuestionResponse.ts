export interface IQuestionResponse {
  category: string;
  type: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  difficulty: string;
};