import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  // console.log("App se render");
  return (
    <>
      <div>
        <header>
          <img src="./src/assets/img/logo.png" alt="" />
          <h2>React Counter</h2>
        </header>
        <main>
          <div>
            <button
              className="minus"
              onClick={() => {
                setCounter(counter - 1);
              }}
            >
              -
            </button>
            <button className="centralbutton">{counter}</button>
            <button
              className="plus"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <div>
            <button
              className="reset"
              onClick={() => {
                setCounter(counter === "0");
              }}
            >
              Reset
            </button>
          </div>
        </main>
        <footer>
          <p>
            Made with <span>React</span> at <span>Le Reacteur</span> by{" "}
            <span>Cindy</span>
          </p>
        </footer>
      </div>
    </>
  );
}

export default App;
