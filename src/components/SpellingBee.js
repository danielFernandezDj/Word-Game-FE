import React, { useState, useEffect, useCallback, useRef } from 'react';
import axios from 'axios';

function SpellingBee() {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [guess, setGuess] = useState('');

  const [feedback, setFeedback] = useState('');
  const [beforeFeedback, setBeforeFeedback] = useState('');

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
    // setIsLoading(true);
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
    setBeforeFeedback('');
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
        // fetchNewWord();
        playAudio(word)
        setIsAnswerRevealed(true);
        setFeedback(` ${word}`);
        setBeforeFeedback(`Correct word is :`)
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
    setFeedback(` ${word}`);
    setBeforeFeedback(`Correct word is :`)
  };

  const handleNextWord = (e) => {
    e.preventDefault();
    fetchNewWord();
  };

  const buttonStyle = {
    // backgroundColor: 'blue',
    color: 'white',
    padding: '1rem 1rem',
    width: '100%',
    margin: '5px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const skipButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'red',
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="border-solid rounded-xl border-2 border-indigo-400 border-dotted
      m-auto max-w-2xl p-8 my-8 flex flex-col
    ">
      <h1 className="font-bold text-5xl flex justify-center text-blue-500">
        Spelling.  <span className="text-green-500">Bee</span>
      </h1>

      <br /> <hr /> <br />

      <div className="border-solid rounded-xl border-2 border-indigo-400 border-dotted
        p-8 bg-white
        ">
        <div className="flex flex-row justify-between">
          <div>
            {/* Hearts:  */}
            {hearts.map((heart, index) => (<span key={index} className="m-1">{heart}</span>
            ))}
          </div>
          <p className="text-bold italic">
            Correct : {correctGuesses}
          </p>
        </div>

        <br /> <hr /> <br />

        <p className="mb-4">
          <strong>Definition : </strong>
          <span className="text-justify m-auto max-w-xl leading-relaxed indent-4">{definition}</span>
        </p>

        <form onSubmit={handleGuess}>
          <input className="border-solid rounded-xl border-2 border-indigo-400 border-dotted mb-2 pl-4 py-2 w-full text-lg"
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            placeholder="• Enter your guess."
          />

          {/* ----------------------------------- I'm at HERE! ----------------------------------- */}
          {/* Need to Fix that the button "Play Word" is deleting one live each time, thats no right */}
          <div className="flex justify-between my-2 mb-4 tracking-wider text-bold">
            <button className="bg-green-600" style={buttonStyle} type="submit"> Submit </button>
            <button className="bg-blue-600" style={buttonStyle} type="button" onClick={() => playAudio(word)}>Play Word</button>
            <button style={skipButtonStyle} onClick={handleSkip}>Skip</button>
            {/* <button style={buttonStyle} onClick={() => playAudio(definition)}>Play Definition</button> */}
          </div>

          <div>
            <button className="rounded-lg w-full bg-yellow-400 tracking-wider py-2 text-bold" onClick={handleRevealAnswer}>
              Reveal Answer
            </button>

            <div className="flex align-center justify-between my-4 bg-zinc-100 rounded-xl">
              <div className="indent-6 self-center">
                <span className="text-blue-500">{beforeFeedback}</span>
                <span className="text-red-500">{feedback}</span>
              </div>
              {/* hover:scale-110 */}
              {isAnswerRevealed && <button onClick={handleNextWord}
                className="bg-indigo-600 rounded-lg p-2 m-2 text-bold text-white
                  hover:drop-shadow-lg  hover:bg-indigo-500
                  transition-transform duration-300
                ">
                Next Word
              </button>}
            </div>
          </div>
        </form>


        {isGameOver && <button style={buttonStyle} onClick={handleNewGame}>New Game</button>}
      </div>

      <button onClick={toggleInstructions} className="m-4 text-2xl font-bold text-indigo-400
        hover:text-indigo-500 hover:scale-110
        transition-transform duration-300
      ">
        {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
      </button>

      {showInstructions && (
        <div className="border-solid rounded-xl border-2 border-indigo-400 border-dotted
            m-auto max-w-2xl p-8 bg-white
          ">

          <div className="flex flex-col justify-center">
            <h2 className="text-lg font-bold bg-zinc-100 rounded-lg my-4 py-2
              text-orange-600 text-center
            ">
              How to Play
            </h2>
            <h3 className="text-justify m-auto max-w-xl leading-relaxed indent-4">
              Spelling Bee is a word challenge game where the goal is to correctly
              spell a word based on its definition. Here's how it works:
            </h3>

            <br />

            <div className="text-justify m-auto max-w-xl leading-relaxed">
              <p className=" my-2 "><strong className="text-orange-600">1- Starting a Game:</strong> Each round begins by listening to the word and reading its definition.</p>

              <hr />

              <p className=" my-2 "><strong className="text-orange-600">2- Entering Your Guess:</strong> Type your guess for the word in the input field.</p>

              <hr />

              <p className=" my-2 "><strong className="text-orange-600">3- Feedback:</strong></p>
              <p className="indent-4">
                <strong className="text-green-600">* Correct Guess:</strong> If you guess the word correctly, your score will increase, and you move to the next word.
              </p>
              <p className="indent-4">
                <strong className="text-gray-500">* Incorrect Guess:</strong> If you guess wrong, you lose one of your 5 hearts.
              </p>

              <hr />

              <p className=" my-2 "><strong className="text-orange-600">4- Winning: </strong> You win by guessing 10 words correctly before running out of hearts.
                If you lose all 5 hearts, the game ends.
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}

export default SpellingBee;