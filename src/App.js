import { Routes, Route, NavLink } from 'react-router-dom'
import './App.css';
import Html from './page/HtmlPage'
import Css from './page/CssPage'
import Javascript from './page/JavascriptPage'
import React from './page/ReactPage'
import NodeJs from './page/NodeJsPage'
import NotFound from './page/NotFound'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to=""><a>HTML</a></NavLink>
          </li>
          <li>
            <NavLink to="/css"><a>CSS</a></NavLink>
          </li>
          <li>
            <NavLink to="/javascript"><a>Javascript</a></NavLink>
          </li>
          <li>
            <NavLink to="/react"><a>React</a></NavLink>
          </li>
          <li>
            <NavLink to="/nodeJs"><a>NodeJS</a></NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='' element={<Html/>}></Route>
        <Route path='/css' element={<Css/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/react' element={<React/>}></Route>
        <Route path='/nodeJs' element={<NodeJs/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
