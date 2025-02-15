import React from "react";
import { useNavigate } from "react-router-dom";
const RegisterForm = ({ formData, handleInputChange }) => {

  const navigate = useNavigate();
  const handleClickLogin = () => {
    navigate('/login');
  };

  const handleClickRegister = () => {
    navigate('/jobs');
  };

  return (
    <form className="mt-4">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.phone}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3E91D8]"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <button
        type="button"
        className="w-full bg-[#3E91D8] text-white py-2 rounded-lg font-semibold hover:bg-blue-700"
        onClick={handleClickRegister}
      >
        Register
      </button>
      <button
        type="button"
        className="w-full mt-4 bg-gray-500 text-white py-2 rounded-lg font-semibold hover:bg-gray-700"
        onClick={handleClickLogin}
      >
        Login
      </button>
    </form>
  );
};

export default RegisterForm;
