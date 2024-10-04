import React, { useState } from 'react';
import WordlePanel from './homePanels/WordlePanel';
import SpellingPanel from './homePanels/SpellingPanel';
import SudokuPanel from './homePanels/SudokuPanel';
import useSound from 'use-sound';

const Home = () => {
  const [panelComponent, setPanelComponent] = useState(<WordlePanel />);

  // AUDIO-FX
  const [volume, setVolume] = React.useState(0.50);
  const [selectPlanet] = useSound('/audio/select-planet.wav');
  const [errorPlanet] = useSound('/audio/error-planet.wav', { volume });

  function handleSelectPlanet() { selectPlanet() };
  function handleErrorPlanet() { errorPlanet() };

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
      <div className="flex flex-wrap md:space-x-1 space-x-5 justify-center">
        <div className='basis-1/3 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => (setPanelComponent(<WordlePanel />), handleSelectPlanet())}>
          <img src="/images/planets/planet-1.png" alt="Wordle Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Wordle</h2>
        </div>
        <div className='basis-1/4 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => (setPanelComponent(<SpellingPanel />), handleSelectPlanet())}>
          <img src="/images/planets/planet-2.png" alt="Spelling-Bee Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Spelling</h2>
        </div>
        <div className='basis-1/5 flex flex-col justify-center hover:scale-110 transition-transform duration-300'
          onClick={() => (setPanelComponent(<SudokuPanel />), handleSelectPlanet())}>
          <img src="/images/planets/planet-3.png" alt="Sudoku Planet" className="hover:drop-shadow-2xl" />
          <h2 className="text-3xl font-bold text-zinc-900">Sudoku</h2>
        </div>
        <div className='basis-1/6 flex flex-col justify-center hover:scale-110 transition-transform duration-300' onClick={handleErrorPlanet}>
          <img src="/images/planets/planet-3.png" alt="Sudoku Planet" className="hover:drop-shadow-2xl contrast-50 grayscale hue-rotate-90" />
          <h2 className="text-3xl font-bold text-zinc-900">Coming</h2>
        </div>
      </div>
      <div className="my-8"> {panelComponent} </div>
    </div>
  );
}

export default Home;
