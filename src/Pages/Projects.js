import logo from '../logo.svg';
import React, { useEffect, useRef } from 'react';

export default function Projects() {
    return <div> <h1> Projects </h1>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited <code>src/App.js</code> Hello World!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> </div>
}