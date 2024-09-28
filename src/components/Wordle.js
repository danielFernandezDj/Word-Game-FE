// src/Wordle.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wordle = () => {
    const [randomWord, setRandomWord] = useState('');
    const [attempts, setAttempts] = useState(Array(6).fill('')); // Initialize attempts for 6 tries
    const [currentGuess, setCurrentGuess] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchRandomWord();
    }, []); // Fetch the random word when the component mounts

    const fetchRandomWord = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}wordle/random-word`);
            setRandomWord(response.data.word);
            setAttempts(Array(6).fill('')); // Reset attempts when fetching a new word
            setMessage(''); // Clear any messages
            setCurrentGuess(''); // Clear the current guess
        } catch (error) {
            console.error("Error fetching random word:", error);
            setMessage("Failed to fetch a random word.");
        }
    };

    const validateWord = async (word) => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}wordle/validate-word`, { word });
            return response.data.message === "Valid word.";
        } catch (error) {
            console.error("Error validating word:", error);
            return false; // Treat as invalid if there's an error
        }
    };

    const handleGuess = async () => {
        if (currentGuess.length !== 5) {
            setMessage('Please enter a 5-letter word.');
            return;
        }

        // Validate the word before processing
        const isValid = await validateWord(currentGuess);
        if (!isValid) {
            setMessage('Invalid word. Please try again.');
            return;
        }

        const newAttempts = [...attempts];
        const emptyIndex = newAttempts.findIndex(attempt => attempt === ''); // Find the first empty attempt
        if (emptyIndex !== -1) {
            newAttempts[emptyIndex] = currentGuess; // Fill in the guess
            setAttempts(newAttempts);
            checkGuess(currentGuess, emptyIndex);
            setCurrentGuess('');
        } else {
            setMessage('No more attempts left!');
        }
    };

    const checkGuess = (guess, attemptIndex) => {
        if (guess === randomWord) {
            setMessage('Congratulations! You guessed the word!');
            return;
        }

        // Check if all attempts have been used
        if (attempts.filter(attempt => attempt !== '').length === 5) {
            setMessage(`Game over! The word was "${randomWord}".`);
            return;
        }

        setMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Wordle Clone</h1>
            <div className="flex flex-col items-center mb-4">
                {/* Render all 6 rows, filling them with current guesses or leaving them empty */}
                {attempts.map((attempt, index) => (
                    <GuessRow key={index} guess={attempt} target={randomWord} />
                ))}
                {/* Input field for the current guess */}
                {attempts.some(attempt => attempt === '') && (
                    <input
                        type="text"
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
                        maxLength="5"
                        className="border border-gray-300 rounded p-2 mb-2 text-center w-24"
                    />
                )}
            </div>
            <button
                onClick={handleGuess}
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 mb-2"
            >
                Submit Guess
            </button>
            <button
                onClick={fetchRandomWord}
                className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
            >
                New Word
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

    // Fill empty squares for the remaining letters in the row
    const emptySquares = Array(5 - guessArray.length).fill(null).map((_, index) => (
        <div className="w-12 h-12 border border-gray-300 flex items-center justify-center text-2xl font-bold bg-gray-200" key={index}></div>
    ));

    return (
        <div className="flex mb-2">
            {squares}
            {emptySquares}
        </div>
    );
};

export default Wordle;