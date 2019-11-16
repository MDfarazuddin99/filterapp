import React, { Component } from 'react'
import AllIssues from './components/AllIssues'
import Issue from './components/Issue'
import Navbar from './components/NavBar'
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";


class App extends Component{
  render(){
    return(
      <div>
      <Router>
        
        <Navbar/>
        <Switch>
        <Route exact path="/" component={AllIssues} />
        <Route exact path="/issue/:id" component={Issue}/>
        </Switch>
      </Router>
  </div>

    )
  }
}






export default App
