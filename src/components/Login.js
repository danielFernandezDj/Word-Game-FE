import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}users/login`, { username, password });
      console.log("User logged in:", response.data);
      onLoginSuccess(response.data.user); // Call the onLoginSuccess function passed as a prop
      navigate('/profile'); // Redirect to the profile page on successful login
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      setError("Invalid username or password");
    }
  };

  return (
    <section className="lg:flex lg:items-center lg:justify-center lg:h-screen | lg:-mt-16">
      <div className="max-w-md p-6 m-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-slate-900">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don't have an account? <a href="/signup" className="text-green-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </section>
  );
};

export default Login;
