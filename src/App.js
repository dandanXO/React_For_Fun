import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './Components/HelloWorld'
import ClassHelloWorld from './Components/ClassHelloWorld'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld name="Dan"/>
        <ClassHelloWorld name="Dan"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Set up First for React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
