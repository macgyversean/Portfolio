import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyThree from "./cube";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sean Carroll</h1>
        <p>Full Stack Developer</p>
        <button
          onClick={() => (window.location.href = "https://seanexperience.com")}
        >
          View Portfolio
        </button>

        <MyThree />
      </header>
    </div>
  );
}

export default App;
