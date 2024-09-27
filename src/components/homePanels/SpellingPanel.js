import React from "react";
import { Link } from 'react-router-dom';

export default function SpellingPanel() {
  return (
    <div>
      <Link
        to="/spelling-bee"
        className="m-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
      >
        Play!
      </Link>

      <h2>This is the Spelling Text!</h2>
      <img src="https://fakeimg.pl/600x400" alt="Spelling" />
    </div>
  )
}