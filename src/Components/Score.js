import React from "react";

//Components
import SinglePlayerScore from "./SingleplayerScore";
import MultiplayerScore from "./MultiplayerScore";

const Score = ({ mode, score, failedFlips, playerTurn }) => {
  if (mode === "multi")
    return <MultiplayerScore score={score} playerTurn={playerTurn} />;
    return <SinglePlayerScore failedFlips={failedFlips} />;
};

export default Score;
