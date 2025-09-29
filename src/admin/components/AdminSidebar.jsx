import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../images/JobPortal.png';

const AdminSidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isMenuOpen, setIsMenuOpen] = useState({
    dashboard: false,
    allWorks: false,
    transactions: false,
    referral: false,
    account: false,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Toggle sidebar visibility

  const toggleMenu = (section) => {
    setIsMenuOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // Logout function
  const handleLogout = () => {
    // Clear session or token here (if using sessionStorage, localStorage, or cookies)
    localStorage.removeItem('userToken'); // Example if you store token in localStorage

    // Redirect to the login page after logout
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="flex h-auto bg-gradient-to-r from-teal-500 to-sky-500">
      {/* Sidebar content */}
      <div className={`w-64 bg-gradient-to-r from-sky-500 to-teal-300 p-6 shadow-lg ${isSidebarOpen ? 'block' : 'hidden'} sm:block`}>
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="Job Portal Logo" className="w-32 rounded" />
        </div>

        {/* Dashboard Section */}
        <div className="mb-4">
          <NavLink to="/admin-dashboard">
            <button className="w-full text-left text-lg font-semibold text-black hover:text-teal-600 transition duration-300">
              Dashboard
            </button>
          </NavLink>
        </div>

        {/* JOB Ads Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-black hover:text-teal-600 transition duration-300"
            onClick={() => toggleMenu('allWorks')}
          >
            JOB Ads
          </button>
          {isMenuOpen.allWorks && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="/all" className="block text-sm text-black hover:text-teal-600 transition duration-300">
                All Advertisement
              </a>
            </div>
          )}
        </div>

        {/* Account Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-black hover:text-teal-600 transition duration-300"
            onClick={() => toggleMenu('account')}
          >
            Account
          </button>
          {isMenuOpen.account && (
            <div className="pl-6 mt-2 space-y-2">
              <button
                onClick={handleLogout}
                className="block text-sm text-black hover:text-teal-600 transition duration-300"
              >
                Log Out
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Toggle Sidebar Button */}
      <button
        className="sm:hidden p-4 text-white bg-teal-600 rounded-md m-4"
        onClick={() => setIsSidebarOpen((prevState) => !prevState)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gradient-to-r from-teal-300 to-sky-500 overflow-y-auto">
        {/* NavBar with Search Bar and Welcome Message */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl text-center font-extrabold text-white font-serif">
              <span>Welcome to the </span>
              <span className="bg-gradient-to-r from-gray-700 via-gray-800 to-black text-transparent bg-clip-text">
                Job Portal
              </span>
              <span> Admin Panel</span>
            </h1>
          </div>
        </div>
        <div>
          {/* Render the nested routes here */}
          <Outlet /> {/* This renders the nested routes like Admin Dashboard */}
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
