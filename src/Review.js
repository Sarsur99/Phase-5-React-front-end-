import React from "react";
import { FaTrash } from "react-icons/fa";

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden mb-4">
      <div className="bg-gray-800 text-white py-4 px-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-6 h-6 text-yellow-400 mr-1"
            >
              <path
                fillRule="evenodd"
                d="M10 1.777l2.938 5.976 6.562.954-4.75 4.617 1.122 6.546L10 16.54l-5.873 3.331 1.122-6.546L1.5 8.707l6.562-.954L10 1.777z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg font-semibold">{score.toFixed(1)}</span>
          </div>
          <button
            className="ml-auto rounded-full p-1 hover:bg-gray-900 transition ease-in-out duration-200"
            onClick={(e) => props.handleDestroy(props.id, e)}
          >
            <FaTrash className="w-6 h-6 text-red-500" />
          </button>
        </div>
      </div>
      <div className="py-4 px-6">
        <p className="text-gray-700 leading-6">{description}</p>
      </div>
    </div>
  );
};

export default Review;
