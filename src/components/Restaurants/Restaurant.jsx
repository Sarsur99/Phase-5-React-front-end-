import React from "react";
// import Restaurants from "./Restaurants";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Restaurant = (props) => {
    // console.log(props);
    return (
        <div className="grid grid-cols-12 gap-4" style={{width: '200%'}}>
            <div className="col-span-12 sm:col-span-6 xl:col-span-4" style={{width: '100%'}}>
                <div className="rounded-lg overflow-hidden shadow-lg bg-white" style={{width: '100%'}}>
                    <div className="px-6 py-4" style={{width: '100%'}}>
                        <div className="flex items-center flex-shrink-0 text-black mb-2 text-xl font-semibold" style={{width: '100%'}}>
                            <img src={props.attributes.image} alt={props.attributes.name} style={{width: '50%'}}/>
                            <span className="ml-2">{props.attributes.name}</span>
                        </div>
                        <div className="flex items-center" style={{width: '100%'}}>
                            <span className="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" style={{width: '100%'}}>{props.attributes.avg_score}</span>
                        </div>
                        <div className="mt-4" style={{width: '100%'}}>
                            <Link to={`/restaurants/${props.attributes.slug}`}  className="text-black bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" style={{width: '100%'}}>View Restaurant</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant;