import logo from "./logo.svg";
import "./App.css";

function Greating(props) {
  return (
    <>
      <h3>Hallo {props.name} </h3>
      <div>Umur kamu {props.age}</div>
    </>
  );
}

function Biodata(props) {
  return <p>Umur Saya {props.age}</p>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a>Nama Saya Khoirul Mustofa</a>
        <Greating name="Khoirul Mustofa" age="30" />
      </header>
    </div>
  );
}

export default App;
