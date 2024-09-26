import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import { WordlePanel } from "./homePanel/WordlePanel";
import { SpellingPanel } from "./homePanel/SpellingPanel";

function Home() {
  const [gameInfo, useGameInfo] = useState(0)

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Word Games</h1>
      <p className="mb-8">Challenge yourself with our exciting word games!</p>

      {/*  Planet Games */}
      <div className="
        space-x-4 mb-4
        flex flex-row flex-wrap justify-center
        border-dashed border-2 border-rose-600
      ">
        <div className='
          basis-1/4
          flex flex-col
          justify-center
          m-4'
        >
          <img src="https://fakeimg.pl/200x200" alt="Wordle Planet" />
          <Link to="/wordle" className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Wordle
          </Link>
        </div>

        <div className='
          basis-1/4
          flex flex-col
          justify-center
          m-4'
        >
          <img src="https://fakeimg.pl/200x200" alt="Spelling-Bee Planet" />
          <Link to="/spelling-bee" className="m-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Spelling
          </Link>
        </div>

      </div>

      {/* Panel ********************* */}
      <div className="
        mb-2
        border-dashed border-2 border-blue-600
      ">
        <div>
          <h3>How to PLay</h3>
        </div>

        <div>
          <h3>Information about how to play the game goes here!</h3>
        </div>
      </div>

      {/* different */}
      <div>

      </div>


    </div>
  );
}

export default Home;