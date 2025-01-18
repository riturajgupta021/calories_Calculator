import React from "react";

const Login = () => {
  return (
    
    <div className="absolute top-1/2 right-20 transform -translate-y-1/2 bg-white p-8 shadow-lg rounded-lg w-96">
      <h2 className="text-gray-700 text-xl font-bold mb-4">Sign in with</h2>
      

    

      <input 
        type="email" 
        placeholder="Enter a valid email address" 
        className="w-full border px-3 py-2 rounded mb-3"
      />

      <input 
        type="password" 
        placeholder="Enter password" 
        className="w-full border px-3 py-2 rounded mb-3"
      />

      <div className="flex justify-between text-sm text-gray-600 mb-3">
        <label>
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <a href="#" className="text-blue-500">Forgot password?</a>
      </div>

      <button className="w-full bg-blue-500 text-white py-2 rounded">Login</button>

      <p className="text-sm text-gray-600 mt-3">
        Don't have an account? <a href="#" className="text-red-500">Register</a>
      </p>
    </div>
  );
};

export default Login;