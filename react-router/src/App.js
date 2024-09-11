import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

import  './App.css'


function App() {
  return (
    <div>
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">Ana Sayfa</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeclassname="active">Hakkında</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeclassname="active">Kullanıcılar</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} /> 
        </Routes>
      </div>
    </Router>
    </div>
  )
}

export default App
