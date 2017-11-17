import React, {
  Component
} from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  prettierTestingCode() {
    function anotherTesterFunc(
      ar1,
      arg2,
      arg3,
      arg4,
      arg5
    ) {}
  }

  anotherThing() {}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={
              logo
            }
            className="App-logo"
            alt="logo"
          />
          <h1 className="App-title">
            Welcome
            to React
          </h1>
        </header>
        <p className="App-intro">
          AAAAA To
          get
          started,
          edit{" "}
          <code>
            src/App.js
          </code>{" "}
          and save
          to reload.
        </p>
      </div>
    );
  }
}

export default App;
