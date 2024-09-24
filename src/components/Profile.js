import React from 'react';

function Profile() {
  // TODO: Fetch user data from backend
  const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    wordleScore: 10,
    spellingBeeScore: 15
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <p className="font-bold">Username:</p>
          <p>{user.username}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Email:</p>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Wordle Score:</p>
          <p>{user.wordleScore}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Spelling Bee Score:</p>
          <p>{user.spellingBeeScore}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;