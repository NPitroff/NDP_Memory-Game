import React, { useState } from "react";
//CSS
import "./App.css";
//Home component
import Home from "./Components/Home";
//Difficulty component
import Difficulty from "./Components/Difficulty";
//Component to re-render the page and change it based on the difficulty chosen
import Game from "./Components/Game";

const App = () => {
  const [mode, setMode] = useState(null);
  const [difficulty, setDifficulty] = useState(null);

  //function to determine which component will be rendered following the results of the two states, "Mode" & "Difficulty"
  const page = () => {
    if (difficulty) return <Game difficulty={difficulty} mode={mode} />;
    if (mode) return <Difficulty setDifficulty={setDifficulty} />;
    return <Home setMode={setMode} />;
  };

  return (
    <div className="App border my-5">
      {page()}
      <div className="row">
        <div className="col-3">
          <button
            className="btn btn-danger mb-3"
            onClick={() => {
              setMode(null);
              setDifficulty(null);
            }}
          >
            Reset
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default App;
