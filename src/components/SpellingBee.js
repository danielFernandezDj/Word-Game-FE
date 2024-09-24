import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SpellingBee() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [guess, setGuess] = useState('');

  useEffect(() => {
    // TODO: Fetch new word from backend
  }, []);

  const handleGuess = async () => {
    // TODO: Send guess to backend and handle response
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Spelling Bee</h2>
      {/* TODO: Implement Spelling Bee game UI */}
    </div>
  );
}

export default SpellingBee;