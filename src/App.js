import "./App.css";
import Dictionary from "./components/Dictionary";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="logo img-fluid" alt="logo" />
          CHECK YOUR WORDS
        </header>
        <main>
          <Dictionary defaultKeyWord="horse" />
        </main>
        <footer>
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/s-khin/"
            target="_blank"
            rel="noreferrer"
          >
            Sireena Khin
          </a>{" "}
          and open sourced on{" "}
          <a
            href="https://github.com/skhin/check-your-words"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
