import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState({});


  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      email: email,
      password: password,
    };

    console.log("Captaindata", captainData);

    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 min-h-screen flex flex-col justify-between bg-white">
      {/* Logo Section */}
      <div>
        <img
          className="w-20 mb-10 mx-auto"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt="App Logo"
        />
      </div>

      {/* Form Section */}
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="mb-10"
      >
        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          What's your email?
        </h3>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="bg-gray-100 mb-6 rounded-md px-4 py-3 border border-gray-300 w-full text-base placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
          type="email"
          placeholder="abcd@gmail.com"
          required
        />

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          Enter Password
        </h3>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
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
          Join our fleet?{" "}
          <Link to="/captain-signup" className="text-blue-600 font-medium">
            Register as a Captain
          </Link>
        </p>
        <Link
          to="/user-login"
          className="bg-[#d5622d] hover:bg-[#fe7a3c] text-white font-semibold rounded-md px-4 py-3 w-full text-lg block transition duration-200"
        >
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
