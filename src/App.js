import React, { useState } from "react";

//CSS
import "./App.css";

//Difficulty component
import Difficulty from "./Components/Difficulty";

//Component to re-render the page and change it based on the difficulty chosen
import Game from "./Components/Game";

const App = () => {
  const [difficulty, setDifficulty] =useState(null);

  return (
    <div className ="App border my-5">
      {difficulty ? (
        <Game difficulty={difficulty} />
      ) : (
        <Difficulty setDifficulty={setDifficulty} />
      )}
    </div>
  );
};
  

export default App;
