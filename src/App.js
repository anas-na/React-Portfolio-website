import { Route, Switch } from "react-router";
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import './App.css'




function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/Home'} component={Home} />
        <Route exact path={'/AboutMe'} component={AboutMe} />
        <Route exact path={'/Projects'} component={Projects} />
      </Switch>
    
    </div>
  );
}

export default App;
