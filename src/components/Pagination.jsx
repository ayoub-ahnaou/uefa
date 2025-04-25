import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center space-x-1 mt-8">
      
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200
          ${currentPage === 1 
            ? "bg-gray-700 text-gray-400 cursor-not-allowed" 
            : "bg-white text-blue-600 hover:bg-blue-100 shadow"}
        `}
      >
        ←
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 
            ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-white text-gray-800 hover:bg-blue-100 shadow"
            }
          `}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200
          ${currentPage === totalPages
            ? "bg-gray-700 text-gray-400 cursor-not-allowed"
            : "bg-white text-blue-600 hover:bg-blue-100 shadow"}
        `}
      >
        →
      </button>
    </div>
  );
};

export default Pagination;
