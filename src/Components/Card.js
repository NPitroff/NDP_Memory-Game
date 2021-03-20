import React, { useState } from "react";

// Back of card
import cardBack from "../images/CardBack.jpg";

const Card = ({ card, checkFlipped }) => {
    const [flipped, changeFlip] = useState(false);

    return (
        <div className="col-3 my-1">
            <img 
                alt="The subject of the card"
                className="mx-auto"
                src={flipped ? card.front : cardBack}
                height="100%"
                width="100%"
                key="front"
                onClick={() => changeFlip(!flipped)}
                />
        </div>
    );
};

export default Card;