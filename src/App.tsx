import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Header } from "shared/layouts/Header";
import { Footer } from "shared/layouts/Footer";
import { IndexPage } from "pages/Index";
import { QuizPage } from "pages/Quiz";
import { QuizResult } from "pages/QuizResult";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={IndexPage} />
          <Route exact path="/quiz" component={QuizPage} />
          <Route exact path="/quiz/result" component={QuizResult} />
        </Switch>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
