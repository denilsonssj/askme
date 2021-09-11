export interface IQuestionStorage {
  question: string;
  correctAnswer: string;
  selectedAnswer: string;
  isFinalized: boolean;
}


export interface IAnswerStorage {
  errors: number;
  hits: number;
  isFinalized: boolean,
  questions: IQuestionStorage[];
};