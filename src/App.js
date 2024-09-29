import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Wordle from './components/Wordle';
import SpellingBee from './components/SpellingBee';
import Sudoku from './components/Sudoku';

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <UserProvider value={{ user, handleLoginSuccess, handleLogout }}>
      <Router>
         {/* Outer container to manage the layout */}
        <div className="min-h-screen flex flex-col bg-gray-100">
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
                    <Link to="/sudoku" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Sudoku</Link>
                  </div>
                </div>
                <div className="hidden md:flex items-center space-x-3">
                  {user ? (
                    <>
                      <Link to="/profile" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Profile</Link>
                      <button onClick={handleLogout} className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                      <Link to="/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </nav>

                  {/* Content container with flex-grow to push the footer down */}
          <div className="flex-grom max-w-6xl mx-auto mt-8 px-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/profile" element={<Profile user={user} />} />
              <Route path="/wordle" element={<Wordle />} />
              <Route path="/spelling-bee" element={<SpellingBee />} />
              <Route path="/sudoku" element={<Sudoku />} />
            </Routes>
          </div>
           {/* Sticky footer */}
          <footer className="bg-white shadow-lg py-4">
            <div className="max-w-6xl mx-auto px-4 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} Word Games. All rights reserved.</p>
              <p>
                <Link to="/" className="hover:text-green-500 transition duration-300">Home</Link> |
                <Link to="/wordle" className="hover:text-green-500 transition duration-300 mx-2">Wordle</Link> |
                <Link to="/spelling-bee" className="hover:text-green-500 transition duration-300 mx-2">Spelling Bee</Link> |
                <Link to="/sudoku" className="hover:text-green-500 transition duration-300">Sudoku</Link>
              </p>
            </div>
          </footer>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;