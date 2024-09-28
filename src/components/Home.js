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
      <p className="text-2 mb-2">Challenge yourself with our exciting word games!</p>

      {/* PLANETS */}
      <div className="flex flex-wrap justify-center">
        {/* WORD-LE BTN */}
        <div className=' basis-1/4 m-6 flex flex-col justify-center
            hover:scale-125
            transition-transform duration-300'
          onClick={handleWordleCLick}
        >
          <img src="/images/planets/planet-1.png" alt="Wordle Planet"
            className="hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold">
            WordLe
          </h2>
        </div>

        {/* SPELLING BTN */}
        <div className='basis-1/4 m-6 flex flex-col justify-center
            hover:scale-125
            transition-transform duration-300'
          onClick={handleSpellingClick}
        >
          <img src="/images/planets/planet-2.png" alt="Spelling-Bee Planet"
            className=" hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold">
            Spelling
          </h2>
        </div>

      </div>

      {/* Panel ********************* */}
      <div className="
        flex flex-row justify-center m-8"
      >
        <div>
          <h2 className='text-3xl font-bold mt-4 font-bold'>
            How to PLay
          </h2>
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