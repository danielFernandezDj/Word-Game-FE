import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// COMPONENTS
import WordlePanel from "./homePanels/WordlePanel";
import SpellingPanel from "./homePanels/SpellingPanel";
import SudokuPanel from "./homePanels/SudokuPanel";

function Home() {
  const [panelComponent, setPanelComponent] = useState(<WordlePanel />)

  const handleWordleCLick = () => {
    setPanelComponent(<WordlePanel />);
  }

  const handleSpellingClick = () => {
    setPanelComponent(<SpellingPanel />);
  }

  const handleSudokuClick = () => {
    setPanelComponent(<SudokuPanel />);
  }

  return (

    <div className="text-center mt-8">
      <h1 className="text-5xl font-bold">Welcome to Word Games</h1>
      <p className="text-2 mb-2">Challenge yourself with our exciting word games!</p>

      {/* PLANETS */}
      <div className="flex flex-wrap justify-center">

        {/* WORD-LE ---------------------- */}
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

        {/* SPELLING ---------------------- */}
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

        {/* SUDOKU ---------------------- */}
        <div className='basis-1/4 m-6 flex flex-col justify-center
            hover:scale-125
            transition-transform duration-300'
          onClick={handleSudokuClick}
        >
          <img src="/images/planets/planet-3.png" alt="Sudoku Planet"
            className=" hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold">
            Sudoku
          </h2>
        </div>

      </div>

      {/* Panels Components displayed here! */}
      <div className="my-8">
        {panelComponent}
        
      </div>
    </div>
  );
}

export default Home;