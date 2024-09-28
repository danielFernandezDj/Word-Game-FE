import React from "react";
import { Link } from 'react-router-dom';

export default function SpellingPanel() {
  return (
    <div className="border-none border-2 border-indigo-600">
      <div className="flex flex-wrap justify-center content-center space-x-8">
        <div className="flex flex-wrap justify-center content-center ">
          <h2>
            Spelling-Bee Manual!
          </h2>
        </div>
        <Link to="/spelling-bee" className="m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Play
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl">
          Welcome to Spelling Bee, an exciting and educational game where you test
          your spelling skills by guessing the correct word based on its definition.
          Here’s a quick guide on how to play:
        </h3>

        <br />

        <h2>How to Play</h2>
        <h3 className="text-justify m-auto max-w-xl">
          Spelling Bee is a word challenge game where the goal is to correctly
          spell a word based on its definition. Here's how it works:
        </h3>

        <br />

        <div className="text-justify m-auto max-w-xl">
          <p><strong>1- Starting a Game:</strong> Each round begins by listening to the word and reading its definition.</p>
          <p><strong>2- Entering Your Guess:</strong> Type your guess for the word in the input field.</p>
          <p><strong>3- Feedback:</strong></p>
          <p className="indent-4">
            <strong>* Correct Guess:</strong> If you guess the word correctly, your score will increase, and you move to the next word.
          </p>
          <p className="indent-4">
            <strong>* Incorrect Guess:</strong> If you guess wrong, you lose one of your 5 hearts.
          </p>
          <p><strong>4- Winning: </strong> You win by guessing 10 words correctly before running out of hearts.
            If you lose all 5 hearts, the game ends.
          </p>
        </div>
      </div>
    </div>
  )
}