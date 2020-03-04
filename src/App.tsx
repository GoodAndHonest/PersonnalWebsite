import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import MainPage from './components/mainPage/main'
import './App.css';

function App() {
  return (
   <Router>
     <Route path='/' component={MainPage}/>
   </Router>
  );
}

export default App;
