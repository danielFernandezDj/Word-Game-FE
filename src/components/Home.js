import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from "use-sound"


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

  // Play a soundFX on click.
  function PlayNewSound() {
    const [playOn] = useSound('/audio/new-audio.wav'); // import newAudio from './audio/new-audio.wav';
  }

  return (
    <div className="text-center mt-8">
      <h1 className="text-6xl font-bold">
        <span className="text-zinc-900"> Welcome to </span>
        <span className="text-orange-500"> Word </span>
        <span className='text-green-500'> Games… </span>
      </h1>
      <p className="text-lg text-zinc-800 m-2">
        Challenge yourself with our exciting word games!
      </p>
      <hr />

      {/* PLANETS */}
      <div className="flex flex-wrap justify-center">

        {/* WORD-LE ---------------------- */}
        <div className=' basis-1/3 m-6 flex flex-col justify-center
            hover:scale-110
            transition-transform duration-300'
          onClick={handleWordleCLick}
        >
          <img src="/images/planets/planet-1.png" alt="Wordle Planet"
            className="hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-zinc-900">
            Wordle
          </h2>
        </div>

        {/* SPELLING ---------------------- */}
        <div className='basis-1/4 m-6 flex flex-col justify-center
            hover:scale-110
            transition-transform duration-300'
          onClick={handleSpellingClick}
        >
          <img src="/images/planets/planet-2.png" alt="Spelling-Bee Planet"
            className=" hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-zinc-900">
            Spelling
          </h2>
        </div>

        {/* SUDOKU ---------------------- */}
        <div className='basis-1/5 m-6 flex flex-col justify-center
            hover:scale-110
            transition-transform duration-300'
          onClick={handleSudokuClick}
        >
          <img src="/images/planets/planet-3.png" alt="Sudoku Planet"
            className=" hover:drop-shadow-2xl"
          />
          <h2 className="text-3xl font-bold text-zinc-900">
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