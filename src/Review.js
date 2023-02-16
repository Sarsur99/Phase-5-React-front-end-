import React from "react";

const Review = (props) => {
    const {score, title, description} = props.attributes
    return (
        <div className="rounded-lg bg-white my-4 p-4 shadow-md h-90%">
            <div className="flex justify-between">
                <div className="font-semibold text-lg">{String.fromCharCode(9733).repeat(score)}</div>
                <div className="font-semibold text-lg">{title}</div>
                <button className="text-sm" onClick={(e) => props.handleDestroy(props.id, e)}>X</button>
            </div>
            <div className="text-sm mt-2">{description}</div>
        </div>
    )
}

export default Review;