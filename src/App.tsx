import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPage from './components/mainPage/main'
import Backend from './components/otherPages/backend/backendDex'
import Devops from './components/otherPages/devops/devops'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
      <Route path='/backend' component={Backend} />
    </Router>
  );
}

export default App;
