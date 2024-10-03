import React, { useState, useEffect, useCallback } from 'react';
import './Sudoku.css';

function Sudoku() {
  const [board, setBoard] = useState([]);
  const [solution, setSolution] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [initialBoard, setInitialBoard] = useState([]);

  const generateSudoku = useCallback(() => {
    const board = Array(9).fill().map(() => Array(9).fill(0));

    function isValid(board, row, col, num) {
      for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num) {
          return false;
        }
      }
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (board[startRow + i][startCol + j] === num) {
            return false;
          }
        }
      }
      return true;
    }

    function solveSudoku(board) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (board[row][col] === 0) {
            for (let num = 1; num <= 9; num++) {
              if (isValid(board, row, col, num)) {
                board[row][col] = num;
                if (solveSudoku(board)) {
                  return true;
                }
                board[row][col] = 0;
              }
            }
            return false;
          }
        }
      }
      return true;
    }

    function fillDiagonal() {
      for (let i = 0; i < 9; i += 3) {
        fillBox(i, i);
      }
    }

    function fillBox(row, col) {
      const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let num;
          do {
            if (nums.length === 0) {
              return false;
            }
            const index = Math.floor(Math.random() * nums.length);
            num = nums[index];
            nums.splice(index, 1);
          } while (!isValid(board, row + i, col + j, num));
          board[row + i][col + j] = num;
        }
      }
      return true;
    }

    fillDiagonal();
    solveSudoku(board);
    return board;
  }, []);

  const createPuzzle = useCallback((fullSudoku) => {
    const puzzle = fullSudoku.map(row => [...row]);
    const numToRemove = 40; // Adjust this number to change difficulty
    let removed = 0;
    while (removed < numToRemove) {
      const row = Math.floor(Math.random() * 9);
      const col = Math.floor(Math.random() * 9);
      if (puzzle[row][col] !== 0) {
        puzzle[row][col] = 0;
        removed++;
      }
    }
    return puzzle;
  }, []);

  useEffect(() => {
    const fullSolution = generateSudoku();
    const newPuzzle = createPuzzle(fullSolution);
    setBoard(newPuzzle);
    setInitialBoard(newPuzzle.map(row => [...row]));
    setSolution(fullSolution);
  }, [generateSudoku, createPuzzle]);

  const checkCompletion = useCallback(() => {
    const isFilled = board.every(row => row.every(cell => cell !== 0));
    setIsComplete(isFilled);
    setIsCorrect(JSON.stringify(board) === JSON.stringify(solution));
  }, [board, solution]);

  useEffect(() => {
    if (submitted) {
      checkCompletion();
    }
  }, [submitted, checkCompletion]);

  function handleChange(row, col, value) {
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value === '' ? 0 : Number(value);
    setBoard(newBoard);
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function retry() {
    const fullSolution = generateSudoku();
    const newPuzzle = createPuzzle(fullSolution);
    setBoard(newPuzzle);
    setInitialBoard(newPuzzle.map(row => [...row]));
    setSolution(fullSolution);
    setIsComplete(false);
    setIsCorrect(false);
    setSubmitted(false);
    setShowSolution(false);
  }

  function renderCell(row, col) {
    const initialValue = initialBoard[row][col];
    const currentValue = board[row][col];
    const solutionValue = solution[row][col];

    return (
      <input
        type="number"
        value={showSolution ? solutionValue : (currentValue || '')}
        onChange={(e) => {
          const value = e.target.value;
          if (value === '' || (value.length === 1 && /^[1-9]$/.test(value))) {
            handleChange(row, col, value);
          }
        }}
        className={`sudoku-input w-10 h-10 text-center border-none font-bold text-lg outline-none focus:outline-none ${
          initialValue ? 'bg-gray-200' : ''
        } ${
          showSolution && currentValue !== solutionValue ? 'text-red-500' : ''
        }`}
        disabled={submitted || initialValue !== 0 || showSolution}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Sudoku Game</h1>
      <div className="grid grid-cols-9 gap-0 mb-4 border-4 border-gray-800">
        {board.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div 
                key={colIndex} 
                className={`
                  ${colIndex % 3 === 0 ? 'border-l-4' : 'border-l-2'}
                  ${rowIndex % 3 === 0 ? 'border-t-4' : 'border-t-2'}
                  ${colIndex === 8 ? 'border-r-4' : ''}
                  ${rowIndex === 8 ? 'border-b-4' : ''}
                  border-gray-800 relative
                `}
              >
                {renderCell(rowIndex, colIndex)}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
      {!submitted && (
        <button
          onClick={handleSubmit}
          className="mb-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      )}
      {submitted && (
        <div className="text-center">
          <p className={`text-xl font-bold ${isCorrect ? 'text-green-500' : 'text-red-500'}`}>
            {isCorrect ? 'Congratulations! Your solution is correct!' : 'Sorry, your solution is incorrect. Try again!'}
          </p>
          {isComplete && (
            <p className="text-lg mt-2">
              You've completed the entire board!
            </p>
          )}
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="mt-4 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
          <button
            onClick={retry}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
}

export default Sudoku;