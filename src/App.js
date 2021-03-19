import React from "react";
import "./App.css";

//Card Data
import cards from "./data";

// Back of card
import cardBack from "./images/CardBack.jpg";

function App() {
  return (
  <div className="App border my-5">
    <div className="container">
      <div className="row">
        {/* {1} */}
        <div className="col-3 my-1">
          {/* {2} */}
          <img alt="Back of a card"
            className="mx-auto"
            src={cardBack}
            height="100%"
            width="100%"
            key="back"
            />
            {/* 3 */}
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
