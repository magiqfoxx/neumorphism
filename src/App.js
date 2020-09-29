import React from "react";
import logo from "./logo.svg";
import "./App.css";
import GlobalStyles from "./components/GlobalStyles";
import Icon from "./components/Icon";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Icon name="alert" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      <GlobalStyles />
    </>
  );
}

export default App;
