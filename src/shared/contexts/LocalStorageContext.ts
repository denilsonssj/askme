import { Context, createContext } from "react";

interface ILocalStorageContext {
  getQuizFromLocalStorage(): any;
};

const LocalStorageContext: Context<ILocalStorageContext> = createContext({} as ILocalStorageContext);

export { LocalStorageContext };