import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyThree from "./cube";

import { Component } from "react";
import { Crisp } from "crisp-sdk-web";

class App extends Component {
  componentDidMount() {
    Crisp.configure("7fa207c6-a4a7-4b2d-a001-a14f2088f8f9");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Sean Carroll</h1>
          <p>Full Stack Developer</p>
          <button
            onClick={() =>
              (window.location.href = "https://seanexperience.com")
            }
          >
            View Portfolio
          </button>

          <MyThree />
        </header>
      </div>
    );
  }
}

export default App;
