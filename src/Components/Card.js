import React from "react";

const Card = ({ card }) => {
    return (
        <div className="col-3 my-1">
            <img 
                alt="The subject of the card"
                className="mx-auto"
                src={card.front}
                height="100%"
                width="100%"
                key="front"
                />
        </div>
    );
};

export default Card;