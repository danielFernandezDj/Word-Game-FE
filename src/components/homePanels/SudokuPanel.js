import React from "react";
import { Link } from 'react-router-dom';

export default function SudokuPanel() {
  return (
    <div className="border-none border-2 border-indigo-600">
      <div className="flex flex-wrap justify-center content-center space-x-8">
        <div className="flex flex-wrap justify-center content-center ">
          <h2 className="text-lg font-bold">
            Sudoku Manual!
          </h2>
        </div>
        <Link to="/sudoku" className="m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Play
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-xl">
          Welcome to Sudoku, a challenging and addictive number puzzle game that
          tests your logic and problem-solving skills. Here's a quick guide to help you understand how to play:
        </h3>

        <br />

        <h2 className="text-lg font-bold">How to Play</h2>
        <h3 className="text-justify m-auto max-w-xl">
          Sudoku is a logic-based puzzle where the objective is to fill a 9x9 grid with numbers.
          The grid is partially filled, and your goal is to complete it by following these simple rules:
        </h3>

        <br />

        <div className="text-justify m-auto max-w-xl">
          <p><strong>1- Starting a Game:</strong> You’ll be presented with a 9x9 grid that is partially filled with numbers.</p>
          <p><strong>2- Entering Your Guess:</strong> Your job is to fill the empty cells with numbers from 1 to 9.</p>
          <p><strong>3- Rules:</strong></p>
          <p className="indent-4">
            <strong>* Rows:</strong> Each row must contain the numbers 1 to 9 without repeating.
          </p>
          <p className="indent-4">
            <strong>* Columns:</strong> Each column must also contain the numbers 1 to 9 without repeating.
          </p>
          <p className="indent-4">
            <strong>* Boxes:</strong> The 9x9 grid is divided into nine 3x3 boxes, and each box must
            contain the numbers 1 to 9 without repeating.
          </p>
          <p><strong>4- Winning: </strong> You win by filling the entire grid correctly without breaking any of the rules.
            If all rows, columns, and boxes contain the numbers 1 to 9 without any repetition, you’ve solved the puzzle!
          </p>
        </div>
      </div>
    </div>
  )
}