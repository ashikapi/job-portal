import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="w-full h-auto bg-white rounded-md p-6 md:p-8">
      {/* Dashboard Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Admin Dashboard</h1>
        <button className="mt-4 sm:mt-0 bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600 transition-all">
          Add New
        </button>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-teal-100 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Total Users</h3>
          <p className="text-2xl font-bold text-teal-600 mt-2">120</p>
        </div>

        {/* Card 2 */}
        <div className="bg-teal-100 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Active Users</h3>
          <p className="text-2xl font-bold text-teal-600 mt-2">85</p>
        </div>

        {/* Card 3 */}
        <div className="bg-teal-100 p-4 rounded-md shadow-md">
          <h3 className="text-xl font-bold text-gray-700">Inactive Users</h3>
          <p className="text-2xl font-bold text-teal-600 mt-2">35</p>
        </div>
      </div>

      {/* More Content */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800">Recent Join Users</h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">username</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Status</th>
                <th className="py-3 px-4 text-left text-sm font-medium text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-3 px-4 text-sm text-gray-700">user1</td>
                <td className="py-3 px-4 text-sm text-gray-700">Active</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="ml-4 text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
              <tr className="border-t">
                <td className="py-3 px-4 text-sm text-gray-700">User2</td>
                <td className="py-3 px-4 text-sm text-gray-700">Inactive</td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  <button className="text-blue-600 hover:underline">Edit</button>
                  <button className="ml-4 text-red-600 hover:underline">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
