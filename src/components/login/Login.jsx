import React, { useState } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // Importing useNavigate for redirecting

const Login = () => {
  const navigate = useNavigate(); // Use navigate for redirection
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role is admin
  const [loginError, setLoginError] = useState(""); // For error message

  // Default credentials (this can be replaced with actual data or fetched from a database)
  const adminCredentials = { username: "admin", password: "admin123" };
  const userCredentials = { username: "user", password: "user123" };

  // Handle login validation
  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "admin" && username === adminCredentials.username && password === adminCredentials.password) {
      // Successful admin login
      console.log("Admin login successful");
      navigate("/admin-dashboard"); // Redirect to Admin Dashboard
    } else if (role === "user" && username === userCredentials.username && password === userCredentials.password) {
      // Successful user login
      console.log("User login successful");
      navigate("/userdashboard"); // Redirect to User Dashboard
    } else {
      // If login fails
      setLoginError("Invalid username or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-teal-300">
      {/* Main Card */}
      <div className="w-full max-w-lg bg-white shadow-lg rounded-3xl p-10 md:ml-0 md:mr-0 ml-2 mr-2">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-sky-400 to-teal-400 text-transparent bg-clip-text">
              Job Portal
            </span>
          </h1>
          <p className="text-gray-500 text-lg">Admin or User Login to Dashboard</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-8">
          {/* Username */}
          <label htmlFor="username" className="block">
            <h1 className="text-sm font-medium text-gray-700 mb-2">
              User Name <span className="text-red-500">*</span>
            </h1>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300"
              placeholder="Enter username"
              required
            />
          </label>

          {/* Password */}
          <label htmlFor="password" className="block">
            <h1 className="text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </h1>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-gray-300 rounded-lg px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300"
                placeholder="Enter password"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-4 cursor-pointer text-gray-600"
              >
                {showPassword ? <IoIosEyeOff size={22} /> : <IoIosEye size={22} />}
              </span>
            </div>
          </label>

          {/* Select Role */}
          <label htmlFor="role" className="block">
            <h1 className="text-sm font-medium text-gray-700 mb-2">
              Select Your Role <span className="text-red-500">*</span>
            </h1>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border-2 border-gray-300 rounded-lg px-5 py-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition-all duration-300"
              required
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>

          {/* Display error message if login fails */}
          {loginError && (
            <p className="text-red-500 text-sm mt-2 text-center">{loginError}</p>
          )}

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label htmlFor="remember" className="flex items-center gap-3">
              <input
                type="checkbox"
                id="remember"
                className="h-5 w-5 accent-sky-500"
              />
              <span className="text-gray-600">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sky-500 hover:underline focus:outline-none"
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-400 to-teal-400 text-white font-extrabold py-4 rounded-lg hover:bg-gradient-to-l hover:from-sky-500 hover:to-teal-500 transition duration-300 ease-in-out shadow-lg transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
