
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap'
import Counter from './components/Counter'
import Resources from './components/Resources'
import WindowSize from './components/WindowSize'
import DoubleNumber from './components/DoubleNumber'
import ThemeChanger from './components/ThemeChanger'
import SimpleCalculator from './components/SimpleCalculator'
import './App.css'

function App() {
  return (
    <div className="App container align-center">
      <Router>
        <div className="row">
          <div className="col-12 p-0">
            <Navbar bg="light" expand="md">
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/counter">Counter</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/window-size">WindowSize</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/double-number">DoubleNumber</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/theme-changer">ThemeChanger</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/simple-calculator">SimpleCalculator</Link>
                    </li>
                  </ul>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <Switch>
              <Route path="/counter">
                <Counter/>
              </Route>
              <Route path="/resources">
                <Resources/>
              </Route>
              <Route path="/window-size">
                <WindowSize/>
              </Route>
              <Route path="/double-number">
                <DoubleNumber/>
              </Route>
              <Route path="/theme-changer">
                <ThemeChanger/>
              </Route>
              <Route path="/simple-calculator">
                <SimpleCalculator/>
              </Route>
              <Route path="/">
                <Counter/>
              </Route>
            </Switch>
          </div>
        </div>
        
      </Router>
    </div>
  );
}

export default App;
