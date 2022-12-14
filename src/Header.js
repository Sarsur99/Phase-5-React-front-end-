import React from "react";

const Header = (props) => {
    // console.log(props)
    const {name, image, avg_score} = props.attributes
    const total = props.reviews.length
    return (
        <div className="wrapper">
            <h1><img src={image} alt={name}>Rest name</img>{name}</h1>
            <div>
                <div className="totalReviews">{total} User Reviews</div>
                <div className="starRating"></div>
                <div className="total">{avg_score} out of 5 </div>
            </div>
        </div>
    )
}

export default Header;