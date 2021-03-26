import React from "react";

const Score = ({ mode, score, failedFlips, playerTurn }) => {
  return (
    <div>
      (
          {/* Checks for the mode and displays either the scores if multiplayer or failed attempts if solo */}
      {mode === "multi" ? (
        <div className="col-3 border">
          <h3>Score</h3>
          <table className="table table-responsive mx-auto">
            <thead>
              <tr>
                <th scope="col" className={playerTurn && "text-danger"}>
                  Player 1
                </th>
                <th scope="col" className={!playerTurn && "text-danger"}>
                  Player 2
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{score[0]}</td>
                <td>{score[1]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="col-3 mt-3">
          <div>
            <h6>Failed Attempts: {failedFlips} </h6>
          </div>
        </div>
      )}
      )
    </div>
  );
};

export default Score;
