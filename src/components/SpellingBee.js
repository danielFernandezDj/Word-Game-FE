import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

function SpellingBee() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [hearts, setHearts] = useState(['❤️', '❤️', '❤️', '❤️', '❤️']);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(true);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);

  const audioRef = useRef(new SpeechSynthesisUtterance());

  const playAudio = useCallback((text) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      audioRef.current.text = text;
      window.speechSynthesis.speak(audioRef.current);
    } else {
      console.error('Text-to-speech not supported in this browser.');
    }
  }, []);

  const fetchDefinition = async (word) => {
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = response.data;
      if (data && data.length > 0 && data[0].meanings && data[0].meanings.length > 0) {
        const def = data[0].meanings[0].definitions[0].definition;
        if (def) {
          setDefinition(def);
          return true;
        }
      }
    } catch (error) {
      console.error('Error fetching definition:', error);
    }
    return false;
  };

  const fetchNewWord = useCallback(async () => {
    setIsLoading(true);
    setIsAnswerRevealed(false);
    let validWordFound = false;
    while (!validWordFound) {
      try {
        const response = await axios.get('https://random-word-api.herokuapp.com/word');
        const newWord = response.data[0];
        const hasDefinition = await fetchDefinition(newWord);
        if (hasDefinition) {
          setWord(newWord);
          validWordFound = true;
        }
      } catch (error) {
        console.error('Error fetching word:', error);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    setGuess('');
    setFeedback('');
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchNewWord();
  }, [fetchNewWord]);

  const loseHeart = () => {
    setHearts(prevHearts => {
      const newHearts = [...prevHearts];
      const fullHeartIndex = newHearts.indexOf('❤️');
      if (fullHeartIndex !== -1) {
        newHearts[fullHeartIndex] = <i className="fa-regular fa-heart"></i>;
      }
      return newHearts;
    });
  };

  const handleGuess = (e) => {
    e.preventDefault();
    if (guess.toLowerCase() === word.toLowerCase()) {
      setFeedback('Correct!');
      setCorrectGuesses(prev => prev + 1);
      if (correctGuesses + 1 >= 10) {
        setIsGameOver(true);
        setFeedback("Congratulations! You've reached 10 correct guesses!");
      } else {
        fetchNewWord();
      }
    } else {
      setFeedback(`Incorrect. Try again!`);
      loseHeart();
      if (hearts.filter(h => h === '❤️').length <= 1) {
        setIsGameOver(true);
        setFeedback(`Game Over! You've run out of hearts. You got ${correctGuesses} words correct.`);
      }
    }
    setGuess('');
  };

  const handleSkip = (e) => {
    e.preventDefault();
    setFeedback(`Skipped. The word was: ${word}`);
    loseHeart();
    if (hearts.filter(h => h === '❤️').length <= 1) {
      setIsGameOver(true);
      setFeedback(`Game Over! You've run out of hearts. You got ${correctGuesses} words correct.`);
    } else {
      fetchNewWord();
    }
  };

  const handleNewGame = (e) => {
    e.preventDefault();
    setHearts(['❤️', '❤️', '❤️', '❤️', '❤️']);
    setCorrectGuesses(0);
    setIsGameOver(false);
    fetchNewWord();
  };

  const toggleInstructions = (e) => {
    e.preventDefault();
    setShowInstructions(prev => !prev);
  };

  const handleRevealAnswer = (e) => {
    e.preventDefault();
    setIsAnswerRevealed(true);
    setFeedback(`The correct word is: ${word}`);
  };

  const handleNextWord = (e) => {
    e.preventDefault();
    fetchNewWord();
  };

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const skipButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
  };

  const revealButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'yellow',
    color: 'black',
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spelling Bee Game</h1>
      <p>Definition: {definition}</p>
      <div style={{ marginBottom: '10px' }}>
        <button style={buttonStyle} onClick={() => playAudio(word)}>Play Word</button>
        <button style={buttonStyle} onClick={() => playAudio(definition)}>Play Definition</button>
      </div>
      <form onSubmit={handleGuess}>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess"
          style={{ marginBottom: '10px' }}
        />
        <div style={{ marginBottom: '10px' }}>
          <button style={buttonStyle} type="submit">Submit Guess</button>
          <button style={skipButtonStyle} onClick={handleSkip}>Skip</button>
          <button style={revealButtonStyle} onClick={handleRevealAnswer}>Reveal Answer</button>
          {isAnswerRevealed && <button style={revealButtonStyle} onClick={handleNextWord}>Next Word</button>}
        </div>
      </form>
      <p>{feedback}</p>
      <div>
        Hearts: {hearts.map((heart, index) => (
          <span key={index}>{heart}</span>
        ))}
      </div>
      <p>Correct Guesses: {correctGuesses}</p>
      {isGameOver && <button style={buttonStyle} onClick={handleNewGame}>New Game</button>}
      <button style={buttonStyle} onClick={toggleInstructions}>
        {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
      </button>
      {showInstructions && (
        <div>
          <h2>Instructions:</h2>
          <p>1. Listen to the word and read its definition.</p>
          <p>2. Type your guess for the word in the input field.</p>
          <p>3. Click 'Submit Guess' to check your answer.</p>
          <p>4. You have 5 hearts. Each incorrect guess loses a heart.</p>
          <p>5. Try to guess 10 words correctly to win!</p>
        </div>
      )}
    </div>
  );
}

export default SpellingBee;