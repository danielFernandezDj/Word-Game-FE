import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Wordle from './components/Wordle';
import SpellingBee from './components/SpellingBee';

function App() {
  const [user, setUser] = useState(null); // State to hold logged-in user data

  const handleLoginSuccess = (userData) => {
    setUser(userData); // Set logged-in user data
  };

  const handleLogout = () => {
    setUser(null); // Clear logged-in user data (logout functionality)
  };

  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-white shadow-lg">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex justify-between">
                <div className="flex space-x-7">
                  <div className="flex items-center py-4 px-2">
                    <Link to="/" className="font-semibold text-gray-500 text-lg">Word Games</Link>
                  </div>
                  <div className="hidden md:flex items-center space-x-1">
                    <Link to="/" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Home</Link>
                    <Link to="/wordle" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Wordle</Link>
                    <Link to="/spelling-bee" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Spelling Bee</Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                  <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                  <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                </div>
              </div>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto mt-8 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
              <Route path="/wordle" element={<Wordle />} />
              <Route path="/spelling-bee" element={<SpellingBee />} />
            </Routes>
          </div>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
