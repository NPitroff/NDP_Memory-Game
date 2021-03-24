import React, { useState } from "react";
// Card flipping component downlaoded with Yarn
import ReactCardFlip from "react-card-flip";
// Back of card
import cardBack from "../images/CardBack.jpg";

// useState hook to "flip" the cards
const Card = ({ card, checkFlipped }) => {
    const [flipped, changeFlip] = useState(false);
//function to flip the card
    const handleFlip =() => {
        if(flipped !== true){
            changeFlip(true);
            checkFlipped({ id: card.id, changeFlip: changeFlip });
        }
    };

    return (
        <div className="col-3 my-1">
            <ReactCardFlip isFlipped ={flipped} flipDirection="vertical">
            <img 
                alt="The back of the card"
                className="mx-auto"
                src={cardBack}
                height="100%"
                width="100%"
                key="back"
                onClick={() => handleFlip()}
                />
                <img
                alt="The front of the card"
                className="mx-auto"
                src={card.front}
                height="100%"
                width="100%"
                key="front"
                onClick={() => handleFlip()}
                />
                </ReactCardFlip>
        </div>
    );
};

export default Card;