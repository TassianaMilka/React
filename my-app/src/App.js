import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>Hello everyone.</p>

        <p>My name is Tasssiana Milka.</p>
        
        <p>I am  Full Stack developer.</p>

        <a
          className="App-link"
          href="https://github.com/TassianaMilka"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>

        <a
          className="App-link"
          href="https://www.linkedin.com/in/tassiana-milka/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>

      </header>
    </div>
  );
}

export default App;
