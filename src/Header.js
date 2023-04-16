import React from "react";

const Header = (props) => {
  const { name, image, avg_score } = props.attributes;
  const total = props.reviews.length;

  return (
    <>
      <br></br>
      <header className="flex flex-col items-center justify-center py-2 bg-gray-900 rounded-md shadow-lg">
        <img src={image} alt={name} className="w-32 h-32 rounded-full border-4 border-yellow-400 mb-4" />
        <h1 className="text-4xl font-bold text-yellow-400 mb-2">{name}</h1>
        <div className="flex items-center justify-center space-x-4 mb-4">
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
          <span className="text-xl font-bold text-yellow-400">{avg_score.toFixed(1)}</span>
        </div>
        <p className="text-lg font-medium text-gray-100 mb-4">{total} Reviews</p>
      </header>
    </>
  );
};

export default Header;
