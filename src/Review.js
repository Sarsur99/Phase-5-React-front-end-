import React from "react";

const Review = (props) => {
    const {score, title, description} = props.attributes
    return (
        <div className="bg-white rounded-lg shadow-md my-4 px-6 py-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center">
            <div className="text-yellow-400 text-2xl">{String.fromCharCode(9733).repeat(score)}</div>
          </div>
        </div>
        <div className="text-sm">{description}</div>
        <button className="text-sm mt-4" onClick={(e) => props.handleDestroy(props.id, e)}>Delete</button>
      </div>
      
    )
}

export default Review;