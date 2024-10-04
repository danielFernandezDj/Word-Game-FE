import React from "react";
import { Link } from 'react-router-dom';
import useSound from 'use-sound';

export default function WordlePanel() {
  const [hoverBtn] = useSound('/audio/hover-btn.wav')
  const [clickBtn] = useSound('/audio/click-btn.wav')

  // AUDIO-FX
  function handleHoverBTN() {
    hoverBtn();
  }

  function handleSelectBTN() {
    clickBtn();
  }

  return (
    <div className="border-none md:rounded-xl border-2 border-indigo-600 m-auto max-w-2xl p-8 bg-white">
      <div className="flex flex-wrap justify-center content-center space-x-8 mb-4 bg-zinc-100 rounded-lg">
        <div className="flex flex-wrap justify-center content-center ">
          <h2 className="text-xl font-bold hover:text-orange-600">
            Word-Le Manual:
          </h2>
        </div>
        <Link to="/wordle"
          className=" tracking-widest m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded
            hover:drop-shadow-lg hover:scale-110 hover:bg-green-500 transition-transform duration-300"
          onMouseEnter={handleHoverBTN} onClick={handleSelectBTN}
        >
          Play
        </Link>
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Welcome to World-Le,a fun and engaging trivia game where you match
          letters in order to get the correct word. Here’s a quick guide to help you
          understand how to play the game.
        </h3>
        <br /> <hr />
        <h2 className="text-lg font-bold bg-zinc-100 rounded-lg my-4 py-2 hover:text-orange-600">
          How to Play
        </h2>
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Word-le is a word puzzle game where the objective is to
          guess a five-letter word within six tries. Here’s how it works:
        </h3>
        <br />
        <div className="text-justify m-auto max-w-xl leading-relaxed">
          <p className=" my-2 "><strong className="text-orange-600">1- Starting a Game:</strong> You begin by entering any valid five-letter word.</p>
          <hr />
          <p className=" mt-2 "><strong className="text-orange-600">2- Feedback:</strong> After each guess, the game provides feedback using colored tiles:</p>
          <p className="indent-4">
            <strong className="text-green-600">* Green:</strong> The letter is correct and in the right position.
          </p>
          <p className="indent-4">
            <strong className="text-yellow-600">* Yellow:</strong> The letter is correct but in the wrong position.
          </p>
          <p className="indent-4">
            <strong className="text-gray-500">* Gray:</strong> The letter is not in the word at all.
          </p>
          <hr />
          <p className=" my-2 "><strong className="text-orange-600">3- Guessing:</strong> Use the feedback to inform your next guesses.
            For example, if a letter is yellow, you know it’s in the word but needs to be placed differently.
          </p>
          <hr />
          <p className=" my-2 "><strong className="text-orange-600">4- Winning: </strong>You win by guessing the word correctly within six tries.
            If you don’t guess it, the correct word is revealed at the end.
          </p>
        </div>
      </div>
    </div>
  )
}