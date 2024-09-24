import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Word Games</h1>
      <p className="mb-8">Challenge yourself with our exciting word games!</p>
      <div className="space-x-4">
        <Link to="/wordle" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Play Wordle
        </Link>
        <Link to="/spelling-bee" className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
          Play Spelling Bee
        </Link>
      </div>
    </div>
  );
}

export default Home;