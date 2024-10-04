import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}users/register`, { username, email, password });
      console.log("User registered:");
      // Optionally handle success (e.g., redirect to login page)
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  return (
    <section className="lg:flex lg:items-center lg:justify-center lg:h-screen | lg:-mt-16">
      <div className="max-w-md p-6 m-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-center text-slate-800">
          Register
        </h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleRegister}
          className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
        >
          Register
        </button>

        <p className="mt-4 text-center">
          You already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a>
        </p>
      </div>
    </section>
  );
};

export default SignUp;