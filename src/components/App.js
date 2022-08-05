import './App.css';
import NavBar from "./NavBar";

function App() {
  return (<div>
    <NavBar /> 
    <div className="App">
      <header className="App-header">
        <p>
          <h1>WELCOME</h1>
          <h3>To the movie search app... </h3>
          <h5>Click on the Search tab to search for movies</h5>
        </p>
      </header>
    </div>
  </div>
  );
}

export default App;
