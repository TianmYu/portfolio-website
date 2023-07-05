import logo from '../logo.svg';
import Socials from '../Components/Socials'

export default function About() {
    return <div> 
        <Socials />
        <h1> About </h1>
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