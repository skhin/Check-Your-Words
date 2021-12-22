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
        <footer>Coded by Sireena Khin</footer>
      </div>
    </div>
  );
}

export default App;
