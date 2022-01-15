import React from 'react'
import { Route, Switch } from "react-router";
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
// import './Stylings/App.css'
import ContactMe from './Components/Contact';
import Skills from './Components/Skills';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Switch> */}
      {/* <Route exact path ='/home' component={Home} />
      <Route exact path ='/aboutMe' component={AboutMe}/>
      <Route exact path ='/projects' component={Projects}/>
      <Route exact path ='/skillsPage' component={Skills}/>
      <Route exact path ='/contact' component={ContactMe}/> */}
      <Home />
      <AboutMe /> */}
      <Projects />
      <Skills />
      <ContactMe /> 
       {/* </Switch>    */}
    </div>
  );
}

export default App;
