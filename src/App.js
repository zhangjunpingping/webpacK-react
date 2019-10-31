import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./modules/Main";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </Router>
);
export default App;
