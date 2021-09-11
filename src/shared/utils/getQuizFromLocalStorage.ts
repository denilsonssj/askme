import { IQuestionResponse } from "shared/interfaces/IQuestionResponse";

export function getQuizFromLocalStorage () {
  const data = localStorage.getItem("app-askme:quiz");
  if (data) {
    try {
      const parsedData: IQuestionResponse = JSON.parse(data) as IQuestionResponse;
      return parsedData;
    }
    catch(error) {
      return null;
    }
  }
}