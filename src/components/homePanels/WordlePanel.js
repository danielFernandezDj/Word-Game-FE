import React from "react";
import { Link } from 'react-router-dom';

export default function WordlePanel() {
  return (
    <div className="border-none border-2 border-indigo-600">
      <div className="flex flex-wrap justify-center content-center space-x-8">
        <div className="flex flex-wrap justify-center content-center ">
          <h2>
            The Word-Le Manual!
          </h2>
        </div>
        <Link to="/wordle" className="m-2 bg-yellow-500 text-white font-bold py-2 px-4 rounded">
          Play!
        </Link>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-justify m-auto max-w-96">
          Welcome to World-Le, a fun and engaging trivia game where you match
          cities with their famous landmarks. Here’s a quick guide to help you
          understand how to play the game.
        </h3>

        <br />

        <h2> Objective </h2>
        <h3 className="text-justify m-auto max-w-96">
          The goal is to correctly match city names to their corresponding images
          of landmarks or wonders of the world. The faster and more accurately
          you match, the higher your score!
        </h3>

        <br />

        <h2>How to Play:</h2>
        <ul className="text-justify m-auto max-w-96">
          <li><strong>Launch the Game:</strong> Tap the <strong>World-Le</strong> app icon to open the game.</li>
          <li><strong>Start a New Game:</strong> Tap the <strong>Play</strong> button to begin. You’ll be presented with an image of a famous landmark or wonder of the world.</li>
          <li><strong>Match the Landmark with the City:</strong> Below the image, you’ll see multiple-choice options with city names. Tap the name of the city you believe corresponds to the landmark.</li>
          <li><strong>Lives & Stars:</strong> Correct answers earn you stars! Wrong answers cost you lives. Lose all lives, and the game ends. But you can restart anytime!</li>
          <li><strong>Next Round:</strong> After each correct match, you’ll automatically move on to the next image and options. If you lose all your lives, tap <strong>Restart</strong> to try again.</li>
        </ul>

        <br />

        <h2>Game Features:</h2>
        <ul className="text-justify m-auto max-w-96">
          <li><strong>Randomized Images:</strong> Every round brings a fresh image of a famous landmark.</li>
          <li><strong>Scoreboard:</strong> Track your progress with a star-based system. Aim for a perfect score!</li>
          <li><strong>Lives Counter:</strong> Monitor your lives at the top of the screen. Avoid incorrect guesses to keep playing.</li>
        </ul>
      </div>

      <br />

      <h2>How to Win:</h2>
      <ul className="text-justify m-auto max-w-96">
        <li><strong>Speed Counts:</strong> Match cities with landmarks quickly to earn the highest points.</li>
        <li><strong>Stay Sharp:</strong> Familiarize yourself with famous landmarks around the world.</li>
        <li><strong>Focus:</strong> Keep an eye on your lives and avoid losing them too quickly.</li>
      </ul>

      <br />

      <h2>Game Over</h2>
      <p>If you lose all your lives, don’t worry! You can restart the
        game by tapping the <strong>Restart</strong> button and try again.
      </p>

      <img src="https://fakeimg.pl/400x400" alt="Wordle" />
    </div>
  )
}