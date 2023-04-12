import React from "react";

const Header = (props) => {
  const { name, image, avg_score } = props.attributes;
  const total = props.reviews.length;

  return (
    <div className="flex items-center justify-between bg-white rounded-md opacity-80 ">
    <div className="w-1/2 flex items-center">
      <img src={image} alt={name} className="w-1/3" />
      <h1 className="text-3xl font-bold ml-4 text-gray-100">{name}</h1>
    </div>
    <div className="w-1/2 flex items-center justify-end">
      <div className="text-2xl font-bold mr-4 text-gray-100">{avg_score.toFixed(1)}</div>
      <div className="flex items-center space-x-2">
        {[...Array(5)].map((_, i) => {
          const score = i + 1;
          const starClassName =
            score <= avg_score
              ? "text-yellow-400"
              : "text-gray-400";
          return (
            <svg
              key={i}
              xmlns="http://www.w3.org/2000/svg"
              className={`${starClassName} h-8 w-8`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 15.585l-5.035 2.622 1.159-5.374L.347 7.715l5.408-.468L10 2.5l2.245 4.747 5.408.468-3.777 4.118 1.159 5.374z"
                clipRule="evenodd"
              />
            </svg>
          );
        })}
      </div>
      <div className="text-2xl font-bold ml-4 text-gray-100">{total} Reviews</div>
    </div>
  </div>
  
  
  );
};

export default Header;