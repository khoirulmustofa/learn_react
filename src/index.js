import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// get name day now
function getNameDayNow() {
  var date = new Date();
  var day = date.getDay();
  var nameDay = "";
  switch (day) {
    case 0:
      nameDay = "Minggu";
      break;
    case 1:
      nameDay = "Senin";
      break;
    case 2:
      nameDay = "Selasa";
      break;
    case 3:
      nameDay = "Rabu";
      break;
    case 4:
      nameDay = "Kamis";
      break;
    case 5:
      nameDay = "Jumat";
      break;
    case 6:
      nameDay = "Sabtu";
      break;
  }
  return nameDay;
}

let name = "Khoirul Mustofa";
const element = <><h1>Hello, {name}</h1></>;
ReactDOM.render(element, document.getElementById("master"));

const element2 = <h1>Hari ini adalah hari {getNameDayNow()}</h1>;
ReactDOM.render(element2, document.getElementById("footer"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
