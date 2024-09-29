import React from "react";
import { Link } from 'react-router-dom';

export default function SpellingPanel() {
  return (
    <div className="border-none rounded-xl border-2 border-indigo-600
        m-auto max-w-2xl p-8 bg-white
      ">
      <div className="flex flex-wrap justify-center content-center space-x-8
        mb-4 bg-zinc-100 rounded-lg
      ">
        <div className="flex flex-wrap justify-center content-center ">
          <h2 className="text-xl font-bold hover:text-orange-600">
            Spelling-Bee Manual:
          </h2>
        </div>
        <Link to="/spelling-bee"
          className="
            tracking-widest m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded
            hover:drop-shadow-lg hover:scale-110 hover:bg-green-500
            transition-transform duration-300
        ">
          Play
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Welcome to Spelling Bee, an exciting and educational game where you test
          your spelling skills by guessing the correct word based on its definition.
          Here’s a quick guide on how to play:
        </h3>

        <br /> <hr />

        <h2 className="text-lg font-bold bg-zinc-100 rounded-lg my-4 py-2
          hover:text-orange-600
        ">
          How to Play
        </h2>
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Spelling Bee is a word challenge game where the goal is to correctly
          spell a word based on its definition. Here's how it works:
        </h3>

        <br />

        <div className="text-justify m-auto max-w-xl leading-relaxed">
          <p className=" my-2 "><strong className="text-orange-600">1- Starting a Game:</strong> Each round begins by listening to the word and reading its definition.</p>

          <hr />

          <p className=" my-2 "><strong className="text-orange-600">2- Entering Your Guess:</strong> Type your guess for the word in the input field.</p>

          <hr />

          <p className=" my-2 "><strong className="text-orange-600">3- Feedback:</strong></p>
          <p className="indent-4">
            <strong className="text-green-600">* Correct Guess:</strong> If you guess the word correctly, your score will increase, and you move to the next word.
          </p>
          <p className="indent-4">
            <strong className="text-gray-500">* Incorrect Guess:</strong> If you guess wrong, you lose one of your 5 hearts.
          </p>

          <hr />

          <p className=" my-2 "><strong className="text-orange-600">4- Winning: </strong> You win by guessing 10 words correctly before running out of hearts.
            If you lose all 5 hearts, the game ends.
          </p>
        </div>
      </div>
    </div>
  )
}