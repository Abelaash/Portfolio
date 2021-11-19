import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Projects";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NavBar from "./components/NavBar";
function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={About} path='/about' />
        <Route component={Project} path='/project' />
        <Route component={Education} path='/education' />
        <Route component={Experience} path='/experience' />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
