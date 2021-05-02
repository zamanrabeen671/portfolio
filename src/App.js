import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import About from './component/About/About';
import Work from './component/Work/Work';
import Contact from './component/Contact/Contact';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/work">
            <Work></Work>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;