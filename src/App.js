import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p1 className="Rotate-text">
          *
        </p1>
        <p2>
          *
        </p2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          project
        </a>
        <a className="App-link" href="/other-page">HOME</a>
      </header>
    </div>
  );
}

export default App;
