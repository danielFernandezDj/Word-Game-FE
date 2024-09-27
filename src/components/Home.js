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
      <div className="mb-4
        flex flex-wrap justify-center
        border-dashed border-2 border-rose-600
      ">
        {/* WORD-LE BTN */}
        <div className=' basis-1/4 m-6 flex flex-col justify-center
            hover:scale-125
            transition-transform duration-300'
          onClick={handleWordleCLick}
        >
          <img src="https://fakeimg.pl/200x200" alt="Wordle Planet" />
          <h2>Wordle</h2>
        </div>

        {/* SPELLING BTN */}
        <div className='basis-1/4 m-6 flex flex-col justify-center
            hover:scale-125
            transition-transform duration-300'
          onClick={handleSpellingClick}
        >
          <img src="https://fakeimg.pl/200x200" alt="Spelling-Bee Planet" />
          <h2>Spelling</h2>
        </div>

      </div>

      {/* Panel ********************* */}
      <div className="
        flex flex-row justify-center
        mb-2 border-dashed border-2 border-blue-600"
      >
        <div>
          <h2 className='text-3xl font-bold mb-4'>How to PLay</h2>
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