import React from "react";

const Review = (props) => {
  const { score, title, description } = props.attributes;
  return (
    <div className="bg-white rounded-lg shadow-md my-4 px-6 py-4 opacity-80">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="flex items-center">
          <div className="text-yellow-400 text-2xl">{String.fromCharCode(9733).repeat(score)}</div>
          <span className="text-gray-500 text-sm ml-2">{score.toFixed(1)}</span>
        </div>
      </div>
      <div className="text-sm text-gray-700 leading-6">{description}</div>
      <button className="text-sm text-red-500 font-medium mt-4" onClick={(e) => props.handleDestroy(props.id, e)}>Delete</button>
    </div>
  );
};

export default Review;
