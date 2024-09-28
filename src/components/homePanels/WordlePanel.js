import React from "react";
import { Link } from 'react-router-dom';

export default function WordlePanel() {
  return (
    <div className="border-none border-2 border-indigo-600">
      <div className="flex flex-wrap justify-center content-center space-x-8">
        <div className="flex flex-wrap justify-center content-center ">
          <h2 className="text-lg font-bold">
            Word-Le Manual:
          </h2>
        </div>
        <Link to="/wordle" className="m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Play
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl">
          Welcome to World-Le, a fun and engaging trivia game where you match
          letters in order to get the correct word. Here’s a quick guide to help you
          understand how to play the game.
        </h3>

        <br />

        <h2 className="text-lg font-bold">How to Play</h2>
        <h3 className="text-justify m-auto max-w-xl">
          Wordle is a word puzzle game where the objective is to
          guess a five-letter word within six tries. Here’s how it works:
        </h3>

        <br />

        <div className="text-justify m-auto max-w-xl">
          <p><strong>1- Starting a Game:</strong> You begin by entering any valid five-letter word.</p>
          <p><strong>2- Feedback:</strong> After each guess, the game provides feedback using colored tiles:</p>
          <p className="indent-4">
            <strong>* Green:</strong> The letter is correct and in the right position.
          </p>
          <p className="indent-4">
            <strong>* Yellow:</strong> The letter is correct but in the wrong position.
          </p>
          <p className="indent-4">
            <strong>* Gray:</strong> The letter is not in the word at all.
          </p>
          <p><strong>3- Guessing:</strong> Use the feedback to inform your next guesses.
            For example, if a letter is yellow, you know it’s in the word but needs to be placed differently.
          </p>
          <p><strong>4- Winning: </strong>You win by guessing the word correctly within six tries.
            If you don’t guess it, the correct word is revealed at the end.
          </p>
        </div>
      </div>
    </div>
  )
}