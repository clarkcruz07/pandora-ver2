import './App.css';
import './assets/css/index.css'
import './assets/css/idle.css'
import './assets/css/home.css'
import 'bootstrap/dist/css/bootstrap.css'
import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import IdleScreen from './components/idle/Home'
import Home from './components/home/Home'
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
              <Route
                path="/"
                element={ <Home /> }
              /> 
              <Route
                path="/idle"
                element={ <IdleScreen /> }
              />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
