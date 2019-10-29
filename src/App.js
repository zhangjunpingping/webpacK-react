import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./Test";
import Main from "./modules/Main";

const App = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
    <Test></Test>
    <div>213413</div>
  </div>
);
export default App;
