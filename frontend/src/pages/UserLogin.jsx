import React from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="p-7 min-h-screen flex flex-col justify-between bg-white">
      {/* Logo Section */}
      <div>
        <img
          className="w-20 mb-10 mx-auto"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
          alt="App Logo"
        />
      </div>

      {/* Form Section */}
      <form className="mb-10">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          What's your email?
        </h3>
        <input
          className="bg-gray-100 mb-6 rounded-md px-4 py-3 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="email"
          placeholder="abcd@gmail.com"
        />

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Enter Password
        </h3>
        <input
          className="bg-gray-100 mb-6 rounded-md px-4 py-3 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="password"
          placeholder="Enter your password"
          required
        />

        <button
          type="submit"
          className="bg-black text-white font-semibold rounded-md px-4 py-3 w-full text-lg hover:bg-gray-900 transition duration-200"
        >
          Login
        </button>
      </form>

      {/* Footer Section */}
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-6">
          New here?{" "}
          <Link to="/user-signup" className="text-blue-600 font-medium">
            Create a new account
          </Link>
        </p>
        <Link
          to="/captain-login"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md px-4 py-3 w-full text-lg block transition duration-200"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
