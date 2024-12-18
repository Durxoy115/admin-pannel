import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-2 mt-4">
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
        &lt;
      </button>
      {[1, 2, 3, 4, 5].map((page) => (
        <button
          key={page}
          className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-300"
        >
          {page}
        </button>
      ))}
      <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
