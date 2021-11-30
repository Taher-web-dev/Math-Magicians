import { CalculatorDesign } from "./components/Calculator";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App" >
        <ul>
          <li>
            <Link to = "/"> Home </Link>
          </li>
          <li>
            <Link to = "/Calculator"> Calculator </Link>
          </li>
          <li>
            <Link to = "/Quote"> Quote </Link>
          </li>
        </ul>
        <Switch>
          <Route path = "/">
            <Homepage/>
          </Route>
          <Route path = "/Calculator">
            <CalculatorDesign/>
          </Route>
          <Route path = "/Quote">
            <Quotepage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
