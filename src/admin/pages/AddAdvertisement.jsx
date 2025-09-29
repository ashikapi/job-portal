import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AddAdvertisement = () => {
  // State for all the form fields
  const [status, setStatus] = useState('Inactive');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [maxShow, setMaxShow] = useState('');
  const [note, setNote] = useState('');
  const [adType, setAdType] = useState('');
  const [link, setLink] = useState('');

  // Toggle the status between Active and Inactive
  const toggleStatus = () => {
    setStatus(prevStatus => (prevStatus === 'Active' ? 'Inactive' : 'Active'));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collecting the form data into an object
    const formData = {
      title,
      category,
      amount,
      duration,
      maxShow,
      status,
      note,
      adType,
      link,
    };

    // Sending the form data to the API
    try {
      const response = await fetch('/api/submit-advertisement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Advertisement added successfully:', data);
      } else {
        console.error('Error adding advertisement:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="w-full h-auto bg-gradient-to-r from-black via-gray-800 to-gray-700 rounded-xl pt-12 pb-12">
      <div className="container mx-auto px-4">
        {/* Header section with the title and a back button */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-300">Add Advertisement</h1>
          <div>
            <NavLink to={'/all'}>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md border-none hover:bg-indigo-700">
            Back
          </button>
          </NavLink>
          </div>
        </div>

        {/* Form section for adding advertisement details */}
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
          {/* First row with title, category, and amount */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="title" className="block text-lg font-medium text-gray-700">
                Title of the Ad <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border px-4 py-2 rounded-md mt-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-xl font-medium text-gray-700">
                Category <span className="text-red-500">*</span>
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border px-4 py-2 rounded-md mt-2 focus:ring-indigo-500 focus:border-indigo-500"
                required
              >
                <option value="">Visit Ad</option>
                <option value="Short Link">Short Link</option>
                <option value="Video Ad">Video Ad</option>
                <option value="Offer Walls">Offer Walls</option>
                <option value="CPI / CPS / CPL">CPI / CPS / CPL</option>
              </select>
            </div>
            <div>
              <label htmlFor="amount" className="block text-lg font-medium text-gray-700">
                Amount <span className="text-red-500">*</span>
              </label>
              <div className="flex mt-2">
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full border px-4 py-2 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Amount in USD"
                  required
                />
                <span className="px-4 py-2 bg-teal-300 rounded-r-md text-gray-600">USD</span>
              </div>
            </div>
          </div>

          {/* Second row with duration, maximum show, and status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <label htmlFor="duration" className="block text-lg font-medium text-gray-700">
                Duration <span className="text-red-500">*</span>
              </label>
              <div className="flex mt-2">
                <input
                  type="number"
                  id="duration"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full border px-4 py-2 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Duration in seconds"
                  required
                />
                <span className="px-4 py-2 bg-teal-300 rounded-r-md text-gray-600">SECONDS</span>
              </div>
            </div>
            <div>
              <label htmlFor="maxShow" className="block text-lg font-medium text-gray-700">
                Maximum Show <span className="text-red-500">*</span>
              </label>
              <div className="flex mt-2">
                <input
                  type="number"
                  id="maxShow"
                  value={maxShow}
                  onChange={(e) => setMaxShow(e.target.value)}
                  className="w-full border px-4 py-2 rounded-l-md focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Maximum number of shows"
                  required
                />
                <span className="px-4 py-2 bg-teal-300 rounded-r-md text-gray-600">TIMES</span>
              </div>
            </div>
            <div>
              <label htmlFor="status" className="block text-lg font-medium text-gray-700">
                Status
              </label>
              {/* Status toggle button */}
              <button
                type="button"
                onClick={toggleStatus}
                className={`w-full py-2 rounded-md mt-2 ${
                  status === "Active" ? "bg-green-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {status}
              </button>
            </div>
          </div>

          {/* Note section with resizable textarea */}
          <div className="mt-8">
            <label htmlFor="note" className="block text-lg font-medium text-gray-700">
              Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border px-4 py-2 rounded-md mt-2 resize-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Add any additional information"
              style={{ resize: "both", overflow: "auto" }}
            />
          </div>

          {/* Advertisement Type section */}
          <div className="mt-8">
            <label htmlFor="adType" className="block text-lg font-medium text-gray-700">
              Advertisement Type <span className="text-red-500">*</span>
            </label>
            <select
              id="adType"
              value={adType}
              onChange={(e) => setAdType(e.target.value)}
              className="w-full border px-4 py-2 rounded-md mt-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            >
              <option value="">Link / URL</option>
              <option value="Banner / Image">Banner / Image</option>
              <option value="Script / Code">Script / Code</option>
              <option value="Youtube Embeded Link">Youtube Embeded Link</option>
            </select>
          </div>

          {/* Link input for Advertisement Type */}
          <div className="mt-6">
            <label htmlFor="link" className="block text-lg font-medium text-gray-700">
              Link
            </label>
            <input
              type="text"
              id="link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border px-4 py-2 rounded-md mt-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="https://example.com"
            />
          </div>

          {/* Submit button */}
          <div className="mt-8 flex justify-center">
            <button type="submit" className="bg-teal-500 text-white px-6 py-3 font-extrabold rounded-md hover:bg-teal-600">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAdvertisement;
