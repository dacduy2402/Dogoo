import { Routes, Route, NavLink, Outlet } from 'react-router-dom'
import './App.css';
import React, { useEffect, useState } from 'react';
import bookApi from './api/bookApi';
import Html from './page/HtmlPage'
import Css from './page/CssPage'
import Javascript from './page/JavascriptPage'
import ReactPage from './page/ReactPage';
import NodeJs from './page/NodeJsPage'
import NotFound from './page/NotFound'
import BookList from './service/bookList';
import BookDetail from './service/bookDetail';

function App() {


  let [bookCategory, setBookCategory] = useState([])
  
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <NavLink to="/html"><a>HTML</a></NavLink>
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
      <Outlet />
      <Routes>
        <Route path='html' element={<Html/>}>
          <Route path=':id' element={<BookDetail/>} />
        </Route>
        <Route path='/css' element={<Css/>}></Route>
        <Route path='/javascript' element={<Javascript/>}></Route>
        <Route path='/react' element={<ReactPage/>}></Route>
        <Route path='/nodeJs' element={<NodeJs/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
