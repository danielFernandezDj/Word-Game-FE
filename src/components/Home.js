import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import WordlePanel from "./homePanels/WordlePanel";
import SpellingPanel from "./homePanels/SpellingPanel";

function Home() {
  // State to store the current panel component
  const [panelComponent, setPanelComponent] = useState(<WordlePanel />)

  // Update state to show WordlePanel or SpellingPanel
  const handleWordleCLick = () => {
    setPanelComponent(<WordlePanel />);
  }

  const handleSpellingClick = () => {
    setPanelComponent(<SpellingPanel />);
  }

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to Word Games</h1>
      <p className="mb-8">Challenge yourself with our exciting word games!</p>

      {/* PLANETS */}
      <div className="
        space-x-4 mb-4
        flex flex-row flex-wrap justify-center
        border-dashed border-2 border-rose-600
      ">
        {/* WORD-LE BTN */}
        <div className=' basis-1/4 flex flex-col justify-center m-4'>
          <img src="https://fakeimg.pl/200x200" alt="Wordle Planet" />
          <Link
            onClick={handleWordleCLick}
            // to="/wordle"
            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Wordle
          </Link>
        </div>

        {/* SPELLING BTN */}
        <div className='basis-1/4 flex flex-col justify-center m-4' >
          <img src="https://fakeimg.pl/200x200" alt="Spelling-Bee Planet" />
          <Link
            onClick={handleSpellingClick}
            // to="/spelling-bee"
            className="m-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
            Spelling
          </Link>
        </div>

      </div>

      {/* Panel ********************* */}
      <div className="mb-2 border-dashed border-2 border-blue-600">
        <div>
          <h3>How to PLay</h3>
        </div>

        <div>
          <h3>Information about how to play the game goes here!</h3>
        </div>
      </div>

      {/* Panel Component displayed here! */}
      <div>
        {panelComponent}
      </div>
    </div>
  );
}

export default Home;