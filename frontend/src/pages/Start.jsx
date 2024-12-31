import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-screen flex flex-col justify-between w-full">
        {/* Logo */}
        <div className="p-6">
          <img
            className="w-20 sm:w-24"
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417"
            alt="Uber Logo"
          />
        </div>

        {/* Content */}
        <div className="bg-white rounded-t-3xl p-6 sm:p-8 shadow-lg">
          <h2 className="text-[26px] sm:text-[30px] font-semibold text-gray-800 text-center">
            Get Started with Uber
          </h2>
          <p className="text-gray-600 text-sm sm:text-base text-center mt-2">
            Explore a seamless way to ride with Uber. Let's get started!
          </p>
          <Link
            to="/login"
            className="flex items-center justify-center w-full bg-black text-white py-4 rounded-lg mt-6 text-lg sm:text-xl shadow-md hover:bg-gray-800 transition-all"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
