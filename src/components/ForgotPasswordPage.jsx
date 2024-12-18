import React from 'react';

function ForgotPasswordPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-3xl font-semibold text-center mb-6">Forgot Password</h1>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center">
            <button className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;
