import { BrowserRouter, Switch, Route } from "react-router-dom";

import { IndexPage } from "pages/Index";
import { QuizPage } from "pages/Quiz";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/quiz" component={QuizPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
