import React from 'react'
import { Route, Switch } from "react-router";
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import AboutMe from './Components/AboutMe'
import Projects from './Components/Projects'
import './App.css'
import ContactMe from './Components/Contact';
import Resume from './Components/Resume';


// Container = React.createClass({
//   render: function(){
//       return <div>
//           <Home/>
//           <AboutMe/>
//           <Projects/>
//           <Resume/>
//           <ContactMe />
//       </div>;
//   }
// });
function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/AboutMe'} component={AboutMe} />
        <Route exact path={'/Projects'} component={Projects} />
        <Route exact path={'/Resume'} component={Resume} />
        <Route exact path={'/Contact'} component={ContactMe} />
      </Switch>
    
    </div>
  );
}

export default App;
