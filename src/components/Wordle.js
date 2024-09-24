// src/Wordle.js

import React, { useState } from 'react';

const words = ['apple', 'grape', 'peach', 'berry', 'mango']; // Sample word list needs to be api
const randomWord = words[Math.floor(Math.random() * words.length)];

const Wordle = () => {
    const [attempts, setAttempts] = useState([]);
    const [guess, setGuess] = useState('');
    const [message, setMessage] = useState('');

    const handleGuess = () => {
        if (guess.length !== 5) {
            setMessage('Please enter a 5-letter word.');
            return;
        }

        setAttempts([...attempts, guess]);
        checkGuess(guess);
        setGuess('');
    };

    const checkGuess = (guess) => {
        if (guess === randomWord) {
            setMessage('Congratulations! You guessed the word!');
            return;
        }

        if (attempts.length >= 5) {
            setMessage(`Game over! The word was "${randomWord}".`);
            return;
        }

        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Wordle Clone</h1>
            <div className="flex flex-col items-center mb-4">
                {attempts.map((attempt, index) => (
                    <GuessRow key={index} guess={attempt} target={randomWord} />
                ))}
                {attempts.length < 6 && (
                    <input
                        type="text"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value.toLowerCase())}
                        maxLength="5"
                        className="border border-gray-300 rounded p-2 mb-2 text-center w-24"
                    />
                )}
            </div>
            <button
                onClick={handleGuess}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
                Submit Guess
            </button>
            <div className="mt-4 text-red-500">{message}</div>
        </div>
    );
};

const GuessRow = ({ guess, target }) => {
    const guessArray = guess.split('');
    const targetArray = target.split('');
    const squares = guessArray.map((letter, index) => {
        let className = 'w-12 h-12 border border-gray-300 flex items-center justify-center text-2xl font-bold';
        if (letter === targetArray[index]) {
            className += ' bg-green-500 text-white';
        } else if (targetArray.includes(letter)) {
            className += ' bg-yellow-500 text-black';
        } else {
            className += ' bg-gray-400 text-white';
        }
        return <div className={className} key={index}>{letter.toUpperCase()}</div>;
    });

    return <div className="flex mb-2">{squares}</div>;
};

export default Wordle;
