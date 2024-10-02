// src/Wordle.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Wordle = () => {
    const [randomWord, setRandomWord] = useState('');
    const [attempts, setAttempts] = useState(Array(6).fill('')); // Initialize attempts for 6 tries
    const [currentGuess, setCurrentGuess] = useState('');
    const [message, setMessage] = useState('');
    const [showInstructions, setShowInstructions] = useState(true);

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

    const toggleInstructions = (e) => {
        e.preventDefault();
        setShowInstructions(prev => !prev);
    };

    return (
        <div className=" md:border-solid md:rounded-xl md:border-2 md:border-indigo-400 md:border-dotted
        m-auto max-w-2xl p-8 md:mx-2 md:mt-8 mb-8 lg:mb-14 flex flex-col
        ">
            {/* TITLE */}
            <h1 className="text-center text-5xl font-bold">
                <span className="text-indigo-500 tracking-widest">Word-</span>
                <span className="text-orange-500 tracking-widest">Le …</span>
            </h1>

            <br /> <hr /> <br />

            {/* 6-ROW */}
            <div className="flex flex-col items-center mb-4">
                {/* Render all 6 rows, filling them with current guesses or leaving them empty */}
                {attempts.map((attempt, index) => (
                    <GuessRow key={index} guess={attempt} target={randomWord}
                        className="mx-4"
                    />
                ))}
                {/* Input field for the current guess */}
                {attempts.some(attempt => attempt === '') && (
                    <input
                        type="text"
                        placeholder="• Type here!"
                        value={currentGuess}
                        onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())}
                        maxLength="5"
                        className="border border-gray-300 rounded p-2 my-2 text-center w-xl"
                    />
                )}
            </div>

            <hr /> <br />

            {/* ACTION BTN */}
            <div className="flex flex-col m-auto max-w-sm">
                <button
                    onClick={handleGuess}
                    className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 mb-2"
                >
                    Submit Guess
                </button>
                <button
                    onClick={fetchRandomWord}
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-600"
                >
                    New Word
                </button>

                <div className="flex justify-center mt-2 text-red-500">{message}</div>
            </div>

            <br /> <hr />

            {/* ---------------------------- Instruction + BTN ---------------------------- */}
            <button onClick={toggleInstructions} className="m-4 text-2xl font-bold text-indigo-400
                hover:text-indigo-500 hover:scale-110
                transition-transform duration-300
            ">
                {showInstructions ? 'Hide Instructions' : 'Show Instructions'}
            </button>

            {showInstructions && (
                <div className="border-solid rounded-xl border-2 border-indigo-400 border-dotted
                    m-auto p-8 bg-white
                ">
                    <div className="text-justify m-auto max-w-md leading-relaxed">
                        <p className=" my-2 "><strong className="text-orange-600">1- Starting a Game:</strong> You begin by entering any valid five-letter word.</p>

                        <hr />

                        <p className=" mt-2 "><strong className="text-orange-600">2- Feedback:</strong> After each guess, the game provides feedback using colored tiles:</p>
                        <p className="indent-4">
                            <strong className="text-green-600">* Green:</strong> The letter is correct and in the right position.
                        </p>
                        <p className="indent-4">
                            <strong className="text-yellow-600">* Yellow:</strong> The letter is correct but in the wrong position.
                        </p>
                        <p className="indent-4">
                            <strong className="text-gray-500">* Gray:</strong> The letter is not in the word at all.
                        </p>

                        <hr />

                        <p className=" my-2 "><strong className="text-orange-600">3- Guessing:</strong> Use the feedback to inform your next guesses.
                            For example, if a letter is yellow, you know it’s in the word but needs to be placed differently.
                        </p>

                        <hr />

                        <p className=" my-2 "><strong className="text-orange-600">4- Winning: </strong>You win by guessing the word correctly within six tries.
                            If you don’t guess it, the correct word is revealed at the end.
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
};

const GuessRow = ({ guess, target }) => {
    const guessArray = guess.split('');
    const targetArray = target.split('');
    const squares = guessArray.map((letter, index) => {
        let className = 'w-22 h-22 flex items-center justify-center text-2xl font-bold';
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
        <div key={index} className="w-12 h-12 m-1 flex items-center justify-center
            text-2xl font-bold bg-gray-200 border-solid border-2 border-indigo-300 border-dotted"
        ></div>
    ));

    return (
        <div className="flex mb-1">
            {squares}
            {emptySquares}
        </div>
    );
};

export default Wordle;