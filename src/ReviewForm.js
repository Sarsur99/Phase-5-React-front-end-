import React, {Fragment} from "react";

const ReviewForm = (props) => {
  const ratingOptions = [1, 2, 3, 4, 5].map((score, index) => {
    return (
      <Fragment key={index}>
      <input
        type="radio"
        value={score}
        name="rating"
        checked={props.review.score === score}
        onChange={props.setRating.bind(this, score)}
        id={`rating-${score}`}
        className="hidden"
      />
      <label 
        onClick={props.setRating.bind(this, score)}
        htmlFor={`rating-${score}`}
        className={`rating-star text-4xl ${props.review.score >= score ? 'text-yellow-400' : 'text-gray-400'} cursor-pointer`}
      >
        ★
      </label>
    </Fragment>
    );
  });

  return (
    <div class="bg-white rounded-lg shadow-lg p-6">
  <h2 class="text-3xl font-bold mb-6">Share Your Experience</h2>
  <form class="grid grid-cols-1 gap-6" onSubmit={props.handleSubmit}>
    <div>
      <label for="title" class="text-xl font-medium text-gray-700 mb-2 block">Review Title</label>
      <input id="title" name="title" type="text" placeholder="Enter your review title" value={props.review.title} onChange={props.handleChange} class="border-2 border-gray-300 p-3 rounded-lg w-full" />
    </div>
    <div>
      <label for="description" class="text-xl font-medium text-gray-700 mb-2 block">Review Description</label>
      <textarea id="description" name="description" placeholder="Enter your review description" value={props.review.description} onChange={props.handleChange} rows="5" class="border-2 border-gray-300 p-3 rounded-lg w-full"></textarea>
    </div>
    <div>
      <label class="text-xl font-medium text-gray-700 mb-2 block">Rate this Restaurant</label>
      <div class="rating-container text-center border-2 border-gray-300 rounded-lg py-4">
        {ratingOptions}
      </div>
    </div>
    <button type="submit" class="bg-green-500 text-white font-bold py-3 px-6 rounded-lg mt-6">Submit Review</button>
  </form>
</div>
  );
};

export default ReviewForm;