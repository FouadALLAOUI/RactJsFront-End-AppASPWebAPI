import logo from "./logo.svg";
import "./App.css";
import { Home } from "./Home";
import { Home1 } from "./Home1";
import { Contact } from "./Contact";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h3 className="d-flex justify-content-center m-3">
          App FrontEnd : Contacts
        </h3>

        <nav className="navbar navbar-expand-sm bg-light navbar-dark">
          <ul className="navbar-nav">
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink className="btn btn-light btn-outline-primary" to="/home1">
                Home1
              </NavLink>
            </li>
            <li className="nav-item- m-1">
              <NavLink
                className="btn btn-light btn-outline-primary"
                to="/contact"
              >
                Department
              </NavLink>
            </li>
          </ul>
        </nav>

      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/home1' component={Home1}/>
        <Route path='/contact' component={Contact}/>
      </Switch>

      </div>
    </BrowserRouter>
  );
}

export default App;
