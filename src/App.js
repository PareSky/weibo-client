import React from 'react';
import {
  Link
} from "react-router-dom";
import './App.css';
import Router from './routes'
function App() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">Users</Link>
          </li>
        </ul>
      </nav> */}
      <Router></Router>
    </div>
  );
}


export default App;