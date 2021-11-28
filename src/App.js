import React from 'react'
import { Route, Switch } from "react-router";
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
// import './Stylings/App.css'
import ContactMe from './Components/Contact';
import Resume from './Components/Resume';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutMe />
      <Projects />
      <Resume />
      <ContactMe />
      {/* <Switch> */}
        {/* <Route path={'/AboutMe'} component={AboutMe} />
        <Route path={'/Projects'} component={Projects} />
        <Route path={'/Resume'} component={Resume} />
        <Route path={'/Contact'} component={ContactMe} />
        <Route path={'/'} component={Home} /> */}
      {/* </Switch> */}
    
    </div>
  );
}

export default App;
