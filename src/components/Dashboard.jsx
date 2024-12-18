import React from "react";
import Navbar from "../components/Navbar";
import Table from "../components/Table";
import Pagination from "../components/Pagination";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4">Clients Information</h1>
        <Table />
        <Pagination />
      </div>
    </div>
  );
};

export default Dashboard;
