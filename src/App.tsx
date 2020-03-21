import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './components/mainPage/main'
import Frontend from './components/otherPages/frontend/frontendDev'
import Backend from './components/otherPages/backend/backendDev'
import Database from './components/otherPages/database/dataBaseDev'
import Devops from './components/otherPages/devops/devopsDev'
import Employment from './components/employment/employmentHistory'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
      <Route path='/frontend' component={Frontend} />
      <Route path='/backend' component={Backend} />
      <Route path='/database' component={Database} />
      <Route path='/devops' component={Devops} />
      <Route path='/employment' component={Employment} />
    </Router>
  );
}

export default App;
