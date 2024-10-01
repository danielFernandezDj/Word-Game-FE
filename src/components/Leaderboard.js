import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchScores = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/scores`);
        setScores(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching scores:', error);
        setIsLoading(false);
      }
    };
    fetchScores();
  }, []);

  const buttonStyle = {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px 15px',
    margin: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Spelling Bee Leaderboard</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '10px' }}>Rank</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Player</th>
            <th style={{ border: '1px solid black', padding: '10px' }}>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <tr key={score.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{index + 1}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{score.user.username}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{score.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/" style={buttonStyle}>Back to Game</Link>
    </div>
  );
}

export default Leaderboard;