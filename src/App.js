import React, { useState } from "react";
import "./App.css";

//Card Data
import cards from "./data";

// Back of card
import cardBack from "./images/CardBack.jpg";

//Components
import Card from "./Components/Card";

// useState hook to count card clicks
const Counter = () => {
  const [counter, setCounter] = useState(0);
  
  return (
    <div>
      <h1>You have clicked this button {counter} times </h1>
      <button onClick={() => setCounter(counter + 1)}>CLICK ME</button>
    </div>
  );
};

function App() {
  let cardsGrid = cards.map(card  => (
    <Card key={card.id} card={card} />
    // return(
    //   <div className="col-3 my-1">
    //     <img
    //     alt="back of card"
    //       className="mx-auto"
    //       src={cardBack}
    //       height="100%"
    //       width="100%"
    //       key="back"
    //       />
    //   </div>
  )
  )
    return (
      <div className="App border my-5">
        <div className="container">
          <div className="row">
            {cardsGrid}
            </div>
          </div>
        </div>
    );
}

export default App;
