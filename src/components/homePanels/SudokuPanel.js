import React from "react";
import { Link } from 'react-router-dom';
import useSound from "use-sound";

export default function SudokuPanel() {
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
            Sudoku Manual:
          </h2>
        </div>
        <Link to="/sudoku"
          className="
            tracking-widest m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded
            hover:drop-shadow-lg hover:scale-110 hover:bg-green-500 transition-transform duration-300"
          onMouseEnter={handleHoverBTN} onClick={handleSelectBTN}
        >
          Play
        </Link>
      </div >

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Welcome to Sudoku, a challenging and addictive number puzzle game that
          tests your logic and problem-solving skills. Here's a quick guide to help you understand how to play:
        </h3>
        <br /> <hr />
        <h2 className="text-lg font-bold bg-zinc-100 rounded-lg my-4 py-2 hover:text-orange-600">
          How to Play
        </h2>
        <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
          Sudoku is a logic-based puzzle where the objective is to fill a 9x9 grid with numbers.
          The grid is partially filled, and your goal is to complete it by following these simple rules:
        </h3>
        <br />
        <div className="text-justify m-auto max-w-xl leading-relaxed">
          <p className=" my-2 "><strong className="text-orange-600">1- Starting a Game:</strong> You’ll be presented with a 9x9 grid that is partially filled with numbers.</p>
          <hr />
          <p className=" my-2 "><strong className="text-orange-600">2- Entering Your Guess:</strong> Your job is to fill the empty cells with numbers from 1 to 9.</p>
          <hr />
          <p className=" my-2 "><strong className="text-orange-600">3- Rules:</strong></p>
          <p className="indent-4">
            <strong className="text-green-600">* Rows:</strong> Each row must contain the numbers 1 to 9 without repeating.
          </p>
          <p className="indent-4">
            <strong className="text-yellow-600">* Columns:</strong> Each column must also contain the numbers 1 to 9 without repeating.
          </p>
          <p className="indent-4">
            <strong className="text-gray-500">* Boxes:</strong> The 9x9 grid is divided into nine 3x3 boxes, and each box must
            contain the numbers 1 to 9 without repeating.
          </p>
          <hr />
          <p className=" my-2 "><strong className="text-orange-600">4- Winning: </strong> You win by filling the entire grid correctly without breaking any of the rules.
            If all rows, columns, and boxes contain the numbers 1 to 9 without any repetition, you’ve solved the puzzle!
          </p>
        </div>
      </div>
    </div >
  )
}