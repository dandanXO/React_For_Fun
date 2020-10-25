import React from 'react';
import logo from './logo.svg';
// import './App.css';
import HelloWorld from './Components/HelloWorld'
import ClassHelloWorld from './Components/ClassHelloWorld'
import Counter from './Components/Counter'
import Header from './Components/Header'

function App() {
  return (
    <div className="App">
        <Header></Header>
        <img src={logo} className="App-logo" alt="logo" />
        <HelloWorld name="Dan"/>
        <ClassHelloWorld name="Dan"/>
        <Counter></Counter>
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
    
    </div>
  );
}

export default App;
