import './App.css';
import NavBar from "./NavBar";

function Genres() {
  return (
  <div>
    <NavBar />
    <div className="App">  
      <header className="App-header">
        <p>
          <h2>GENRES</h2>
          <ul>
            <li>Action</li>
            <li>Animation</li>
            <li>Comedy </li>
            <li>Crime </li>
            <li>Drama</li>
            <li>Fantasy</li>
            <li>Horror</li>
            <li>Romance</li>
            <li>Science Fiction</li>
            <li>Thriller </li>
            <li>Other</li>
          </ul>
        </p>
      </header>
    </div>
  </div>
  );
}

export default Genres;
