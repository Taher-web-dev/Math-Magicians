import { CalculatorDesign } from "./components/Calculator";
import { Homepage } from "./components/Home";
import { Quotepage } from "./components/Quote";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className= "App" >
        <nav className = "navClass">
          <h1> Math Magicians </h1>
         <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/Calculator">Calculator</Link>
          </li>
          <li>
            <Link to = "/Quote">Quote</Link>
          </li>
         </ul>
        </nav>
        <Switch>
          <Route exact path = "/">
            <Homepage />
          </Route>
          <Route path = "/Calculator" >
            <CalculatorDesign />
          </Route>
          <Route path = "/Quote">
            <Quotepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
