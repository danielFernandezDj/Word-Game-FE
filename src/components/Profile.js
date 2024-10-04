import React from 'react';

function Profile({ user, onLogout }) {
  if (!user) {
    return <p className="text-center text-lg text-gray-600">Please log in to view your profile.</p>; // Optional: Handle case when user is not logged in
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">User Profile</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="mb-4">
          <p className="font-bold">Username:</p>
          <p className="text-gray-700">{user.username}</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Email:</p>
          <p className="text-gray-700">{user.email}</p>
        </div>
        <button
          onClick={onLogout}
          className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;