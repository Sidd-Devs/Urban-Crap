import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg';

const CustomerSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/loginsa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      });

      const data = await response.json();
      console.log(data);
      if (data.agentId == 0 || data.agentId == -1) {
        alert(data.message);
      }
      else {
        // Store the agentId in local storage
        localStorage.setItem('agentId', data.agentId);

        // store the agentId in local storage
        navigate('/agent/home');
      }
    } catch (error) {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-[#eaf0f7] p-8">
      {/* Back Button */}
      <Link to="/">
        <button

          className="flex items-center gap-2 text-[#1c4e80] hover:text-[#2d7abc] mb-8"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back
        </button>
      </Link>

      {/* Logo and Company Name */}
      <div className="flex flex-col items-center mb-12">
        <img
          src={logo}
          alt="Urban Crap Logo"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h1 className="text-3xl font-bold text-[#1c4e80]">Urban Crap</h1>
      </div>

      {/* Sign In Form */}
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-2xl font-semibold text-[#1c4e80] mb-8">Sign In</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="email"
              placeholder="Email ID"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c4e80] focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1c4e80] focus:border-transparent outline-none transition"
            />
          </div>


          <button
            type="submit"
            className="w-full bg-[#1c4e80] text-white py-3 rounded-lg hover:bg-[#2d7abc] transition duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomerSignIn;