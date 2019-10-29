import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HeaderBar from "../../components/HeaderBar";
import Test from "../Test";

class Main extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <Switch>
          <Route path={`/`} component={Test} />
        </Switch>
      </div>
    );
  }
}
export default Main;
