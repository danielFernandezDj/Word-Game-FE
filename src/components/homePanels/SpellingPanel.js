import React from "react";
import { Link } from 'react-router-dom';

export default function SpellingPanel() {
  return (
    <div className="flex flex-wrap justify-center content-center space-x-8">
      <div className="flex flex-wrap justify-center content-center ">
        <h2>
          Spelling-Bee Manual!
        </h2>
      </div>
      <Link to="/spelling-bee" className="m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded">
        Play!
      </Link>
    </div>
  )
}