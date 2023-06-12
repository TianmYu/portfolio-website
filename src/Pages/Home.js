import logo from '../logo.svg';

export default function Home() {
    return <main>
      <h1> Home </h1>
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
    </main>
}