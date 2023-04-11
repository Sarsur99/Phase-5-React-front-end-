import React from "react";

const LoginPage = () => {
  return (
    <div className="text-center p-8 flex justify-center">
      <div className="p-8 bg-gray-200 rounded-lg max-w-lg">
        <h1 className="text-3xl font-bold mb-2">Login</h1>
        <form>
          <input
            type="text"
            placeholder="Enter username"
            className="p-4 block w-full bg-gray-300 rounded-lg mb-4"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="p-4 block w-full bg-gray-300 rounded-lg mb-4"
          />
          <button className="bg-green-400 text-white font-bold py-2 px-4 rounded-lg">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
