import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import "./index.css";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route to="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
