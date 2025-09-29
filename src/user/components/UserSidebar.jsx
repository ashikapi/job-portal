import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../images/JobPortal.png';

const UserSidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const [isMenuOpen, setIsMenuOpen] = useState({
    dashboard: false,
    allWorks: false,
    transactions: false,
    referral: false,
    account: false,
  });

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
    <div className="flex h-auto">
      {/* Sidebar content */}
      <div className="w-64 bg-gradient-to-r from-black via-gray-800 to-gray-700 p-6">
        {/* Logo Section */}
        <div className="flex justify-center items-center mb-10">
          <img src={logo} alt="Logo" className="w-32 rounded" />
        </div>

        {/* Balance Section */}
        <div className='flex justify-center items-center text-center mt-10'>
          <div className="mb-6 p-4 bg-gray-800 rounded-xl">
            <h3 className="text-xl text-white font-extrabold mb-2">My Balance</h3>
            <p className="text-2xl font-bold text-[rgb(1,152,255)]">{'1.33556'} USD</p>
            <div className="flex space-x-4 mt-4">
              <button className="bg-green-600 text-white p-2 text-sm rounded-md">Deposit</button>
              <button className="bg-red-600 text-white p-2 text-sm rounded-md">Withdraw</button>
            </div>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className="mb-4">
          <NavLink to={'/userdashboard'}>
            <button className="w-full text-left text-lg font-semibold text-blue-100">Dashboard</button>
          </NavLink>
        </div>

        {/* All Works Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-blue-100"
            onClick={() => toggleMenu('allWorks')}
          >
            All Works
          </button>
          {isMenuOpen.allWorks && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="/viewad" className="block text-sm text-blue-300">View ADS</a>
              <a href="#" className="block text-sm text-blue-300">Completed</a>
            </div>
          )}
        </div>

        {/* Transactions Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-blue-100"
            onClick={() => toggleMenu('transactions')}
          >
            Transactions
          </button>
          {isMenuOpen.transactions && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="#" className="block text-sm text-blue-300">View Transactions</a>
            </div>
          )}
        </div>

        {/* Referral Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-blue-100"
            onClick={() => toggleMenu('referral')}
          >
            Referral
          </button>
          {isMenuOpen.referral && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="#" className="block text-sm text-blue-300">Invite Friends</a>
              <a href="#" className="block text-sm text-blue-300">Referral Earnings</a>
            </div>
          )}
        </div>

        {/* Help & Support Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-blue-100"
            onClick={() => toggleMenu('helpSupport')}
          >
            Help & Support
          </button>
          {isMenuOpen.helpSupport && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="#" className="block text-sm text-blue-300">FAQ</a>
              <a href="#" className="block text-sm text-blue-300">Contact Support</a>
            </div>
          )}
        </div>

        {/* Account Section */}
        <div className="mb-4">
          <button
            className="w-full text-left text-lg font-semibold text-blue-100"
            onClick={() => toggleMenu('account')}
          >
            Account
          </button>
          {isMenuOpen.account && (
            <div className="pl-6 mt-2 space-y-2">
              <a href="#" className="block text-sm text-blue-300">Profile Settings</a>
              <button onClick={handleLogout} className="block text-sm text-blue-300">Log Out</button>
            </div>
          )}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-black">
        {/* NavBar with Search Bar and Welcome Message */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl text-center font-extrabold text-white font-serif ">
              <span>Welcome to the </span>
              <span className='bg-gradient-to-r from-sky-400 to-teal-400 text-transparent bg-clip-text'>Job Portal</span>
              <span> User Panel</span>
            </h1>
          </div>
        </div>
        <div>
          {/* Render the nested routes here */}
          <Outlet /> {/* This renders the nested routes like UserDashboard */}
        </div>
      </div>
    </div>
  );
};  

export default UserSidebar;
