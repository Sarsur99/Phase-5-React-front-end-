import React, {Fragment} from "react";

const ReviewForm = (props) => {
  const ratingOptions = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <Fragment>
        <input
          type="radio"
          value={score}
          name="rating"
          checked={props.review.score === score}
          onChange={props.setRating.bind(this, score)}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </Fragment>
    );
  });

  return (
    <div className="h-screen bg-black">
      <form onSubmit={props.handleSubmit}>
        <div className="text-white text-3xl m-3">Have an experience with {props.attributes.name}?</div>
        <div className="field m-3">
          <input
            onChange={props.handleChange}
            value={props.review.title}
            type="text"
            name="title"
            placeholder="Review Title"
            className="text-2xl border-2 border-gray-400 rounded-md py-2 px-4"
          />
        </div>
        <div className="field m-3">
          <input
            onChange={props.handleChange}
            value={props.review.description}
            type="text"
            name="description"
            placeholder="Review Description"
            className="text-2xl border-2 border-gray-400 rounded-md py-2 px-4"
          />
        </div>
        <div className="field m-3">
          <div className="rating-container text-center border-2 border-gray-400 rounded-md">
            <div className="rating-title-text text-2xl text-white">
              {" "}
              Rate this Restaurant
            </div>
            <div className="rating-box flex flex-row-reverse">
              {ratingOptions}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white font-bold py-2 px-4 m-3 rounded-md"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;