import React, { useState, useEffect } from "react";

//data 
import allCards from "../data";

//Utils 
import { shuffle } from "../utils";

// Components
import Card from "./Card";
import Score from "./Score";

const Game = ({ mode, difficulty }) => {
    const [cards, setCards] = useState([]);

    //function to duplicate card images to match them up
useEffect(() => {
    let cards = allCards;
    switch (difficulty) {
        case "easy":
            cards = allCards.slice(0, 6);
            break;
        case "medium":
            cards = allCards.slice(0,8);
            break;
        default:
            break;
    }
    setCards(() => shuffle([...cards, ...cards]));

}, [difficulty]);

//Keep track of player scores ([playerOneScore, playerTwoScore])
const [score, setScore] = useState([0, 0]);

//Track player turn
const [playerTurn, setPlayerTurn] = useState(true);

//Keeps track of failed flips in single player mode
const [failedFlips, increaseFailed] = useState(0);

// define a flipped card
let flippedCards = [];
const changeFlipped = anArray => {
    flippedCards = anArray;
};

// define an unflipped card
const unflipCards = (unflip1, unflip2) => {
    setTimeout(() => {
        unflip1(false);
        unflip2(false);
    }, 1000);
};

// if statement to match cards in the new array, if not matched, then flip back down
const checkFlipped = flippedObject => {
    changeFlipped([...flippedCards, flippedObject]);

    if (flippedCards.length === 2) {
        if(flippedCards[0].id !== flippedCards[1].id) {
            unflipCards(flippedCards[0].changeFlip, flippedCards[1].changeFlip);

            // Adds to the failed flipped score
            increaseFailed(failedFlips + 1);

            // For muliplayer, if cards dont match, player gets switched
            setPlayerTurn(!playerTurn);
        } else {
            if (mode === "multi") {
                if (playerTurn) {
                    //If multiplayer, increase score of a correct guess for the active player
                    setScore([(score[0] += 1), score[1]]);
                } else {
                    setScore([score[0], (score[1] += 1)]);
                }
            }
        }
        changeFlipped([]);
    }
};

//Map through the card array and place the images in the card component
const cardsList = cards.map((card, idx) => (
    <Card key={`${card.id}-${idx}`} card={card} checkFlipped={checkFlipped} />
));

return (
    <div className="container">
        <div className="row">
            <div className="col-9">
                <div className="row border">{cardsList}</div>
            </div>
            {/* Component to diplay score */}
            <Score 
                mode={mode}
                score={score}
                failedFlips={failedFlips}
                playerTurn={playerTurn}
                />
        </div>
    </div>
);
};

export default Game;