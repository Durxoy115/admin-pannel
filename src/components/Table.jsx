import React from "react";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "Gustavo",
      clientId: "353",
      mobile: "1234567...",
      email: "test@gmail.com",
      company: "ABC Infotech",
      currency: "Euro",
      country: "Europe",
      status: "Active",
    },
    {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
    {
      id: 2,
      name: "Martin",
      clientId: "353",
      mobile: "1234567...",
      email: "test@gmail.com",
      company: "XYZ Software",
      currency: "BDT",
      country: "Bangladesh",
      status: "Inactive",
    },
    {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },

      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
      {
        id: 1,
        name: "Gustavo",
        clientId: "353",
        mobile: "1234567...",
        email: "test@gmail.com",
        company: "ABC Infotech",
        currency: "Euro",
        country: "Europe",
        status: "Active",
      },
    // Add more rows as per requirement
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Client Details</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-2 text-left">Client Name</th>
              <th className="p-2 text-left">Client ID</th>
              <th className="p-2 text-left">Mobile</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Company Name</th>
              <th className="p-2 text-left">Currency</th>
              <th className="p-2 text-left">Country</th>
              <th className="p-2 text-left">Status</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-2">{row.name}</td>
                <td className="p-2">{row.clientId}</td>
                <td className="p-2">{row.mobile}</td>
                <td className="p-2">{row.email}</td>
                <td className="p-2">{row.company}</td>
                <td className="p-2">{row.currency}</td>
                <td className="p-2">{row.country}</td>
                <td className="p-2">
                  <span
                    className={`px-2 py-1 rounded ${
                      row.status === "Active"
                        ? "bg-green-200 text-green-800"
                        : "bg-red-200 text-red-800"
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="p-2 text-center space-x-2">
                  <button className="text-gray-500 hover:text-gray-700">
                    👁️
                  </button>
                  <button className="text-purple-500 hover:text-purple-700">
                    ✏️
                  </button>
                  <button className="text-yellow-500 hover:text-yellow-700">
                    📋
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
