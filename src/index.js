import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js'
import Project from './Project'
import ProjectContainer from './ProjectContainer'
import './index.scss'
import './wrapper.css'
import './scrollbar.scss'
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import 'bootstrap/dist/css/bootstrap.min.css'


const App = withRouter(({location}) => (
  <TransitionGroup>
    <CSSTransition key={location.key}
                  timeout={{ enter: 300, exit: 300 }}
                  classNames='fade'>
      <Switch location={location}>
        <Route exact path="/">
          <Project />
        </Route>
        <Route path="/project">
          <ProjectContainer />
        </Route>
      </Switch>
    </CSSTransition>
  </TransitionGroup>
))

class Index extends React.Component{
  render(){
    return(
      <Router>
        <Home />
        <App />
      </Router>
    )
  }
}
ReactDOM.render(<Index />, document.getElementById('root'));
