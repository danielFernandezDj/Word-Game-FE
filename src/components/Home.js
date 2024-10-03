import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useSound from 'use-sound';
import WordlePanel from './homePanels/WordlePanel';
import SpellingPanel from './homePanels/SpellingPanel';
import SudokuPanel from './homePanels/SudokuPanel';

const Home = () => {
  const [panelComponent, setPanelComponent] = useState(<WordlePanel />);

  const [playOn] = useSound('/audio/new-audio.wav');

  return (
    <div className="text-center mt-8">
      <h1 className="text-6xl font-bold">
        <span className="text-zinc-900">Welcome to</span>
        <span className="text-orange-500"> Word </span>
        <span className='text-green-500'> Games…</span>
      </h1>
      <p className="text-lg text-zinc-800 m-2">
        Challenge yourself with our exciting word games!
      </p>
      <hr />
      <div className="flex flex-wrap justify-center">
        <div className='basis-1/3 m-6 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => setPanelComponent(<WordlePanel />)}
        >
          <img src="/images/planets/planet-1.png" alt="Wordle Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Wordle</h2>
        </div>
        <div className='basis-1/4 m-6 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => setPanelComponent(<SpellingPanel />)}
        >
          <img src="/images/planets/planet-2.png" alt="Spelling-Bee Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Spelling</h2>
        </div>
        <div className='basis-1/5 m-6 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => setPanelComponent(<SudokuPanel />)}
        >
          <img src="/images/planets/planet-3.png" alt="Sudoku Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Sudoku</h2>
        </div>
      </div>
      <div className="my-8">
        {panelComponent}
      </div>
      {/* Uncomment the following block to add the 'About Word Games' link */}
      {/* <div className="mt-4">
        <Link to="/about" className="text-blue-500 hover:underline">
          About Word Games
        </Link>
      </div> */}
    </div>
  );
}

export default Home;
