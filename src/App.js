import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Main } from './ui/components/main'
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to={'/'}>Contact</Link>
              </li>
              <li>
                <Link to={'/blog'}>Blog</Link>
              </li>
              <li>
                <Link to={'/resume'}>Resume</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Main/>
      </div>
    );
  }
}

export default App;
