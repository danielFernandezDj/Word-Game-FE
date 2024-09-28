import React, { useState, useEffect, useCallback } from 'react';

function Sudoku() {
  const [board, setBoard] = useState(createInitialBoard());
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const checkCompletion = useCallback(() => {
    const isFilled = board.every(row => row.every(cell => cell !== null));
    setIsComplete(isFilled);
    setIsCorrect(isValidSolution(board));
  }, [board]);

  useEffect(() => {
    if (submitted) {
      checkCompletion();
    }
  }, [submitted, checkCompletion]);

  function createInitialBoard() {
    const initialBoard = Array(9).fill(null).map(() => Array(9).fill(null));
    initialBoard[0][0] = 5; initialBoard[0][1] = 3; initialBoard[0][4] = 7;
    initialBoard[1][0] = 6; initialBoard[1][3] = 1; initialBoard[1][4] = 9; initialBoard[1][5] = 5;
    initialBoard[2][1] = 9; initialBoard[2][2] = 8; initialBoard[2][7] = 6;
    initialBoard[3][0] = 8; initialBoard[3][4] = 6; initialBoard[3][8] = 3;
    initialBoard[4][0] = 4; initialBoard[4][3] = 8; initialBoard[4][5] = 3; initialBoard[4][8] = 1;
    initialBoard[5][0] = 7; initialBoard[5][4] = 2; initialBoard[5][8] = 6;
    initialBoard[6][1] = 6; initialBoard[6][6] = 2; initialBoard[6][7] = 8;
    initialBoard[7][3] = 4; initialBoard[7][4] = 1; initialBoard[7][5] = 9; initialBoard[7][8] = 5;
    initialBoard[8][4] = 8; initialBoard[8][7] = 7; initialBoard[8][8] = 9;
    return initialBoard;
  }

  function handleChange(row, col, value) {
    const newBoard = board.map(r => [...r]);
    newBoard[row][col] = value === '' ? null : Number(value);
    setBoard(newBoard);
  }

  function isValidSolution(board) {
    // Check rows
    for (let i = 0; i < 9; i++) {
      if (new Set(board[i].filter(cell => cell !== null)).size !== board[i].filter(cell => cell !== null).length) return false;
    }

    // Check columns
    for (let i = 0; i < 9; i++) {
      const column = board.map(row => row[i]).filter(cell => cell !== null);
      if (new Set(column).size !== column.length) return false;
    }

    // Check 3x3 sub-grids
    for (let i = 0; i < 9; i += 3) {
      for (let j = 0; j < 9; j += 3) {
        const subGrid = [];
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            if (board[i + x][j + y] !== null) {
              subGrid.push(board[i + x][j + y]);
            }
          }
        }
        if (new Set(subGrid).size !== subGrid.length) return false;
      }
    }

    return true;
  }

  function handleSubmit() {
    setSubmitted(true);
  }

  function retry() {
    setBoard(createInitialBoard());
    setIsComplete(false);
    setIsCorrect(false);
    setSubmitted(false);
  }

  function renderCell(row, col) {
    return (
      <input
        type="number"
        value={board[row][col] || ''}
        onChange={(e) => handleChange(row, col, e.target.value)}
        min="1"
        max="9"
        className="w-10 h-10 text-center border border-gray-300"
        disabled={submitted}
      />
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Sudoku Game</h1>
      <div className="grid grid-cols-9 gap-1 mb-4">
        {board.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            {row.map((cell, colIndex) => (
              <div key={colIndex} className={`border ${colIndex % 3 === 2 && colIndex !== 8 ? 'border-r-2' : ''} ${rowIndex % 3 === 2 && rowIndex !== 8 ? 'border-b-2' : ''} border-gray-400`}>
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
            onClick={retry}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default Sudoku;