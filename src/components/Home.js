import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Welcome to Word Games</h1>
      <div className="space-y-4">
        <Link to="/wordle" className="block">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-48">
            Play Wordle
          </button>
        </Link>
        <Link to="/spelling-bee" className="block">
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded w-48">
            Play Spelling Bee
          </button>
        </Link>
        <Link to="/sudoku" className="block">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-48">
            Play Sudoku
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;