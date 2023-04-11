import React, { useState } from "react";
// import Restaurants from "./Restaurants";
import { Link } from "react-router-dom";

const Restaurant = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(props.attributes.name);
    const [image, setImage] = useState(props.attributes.image);

const handleName = (e) => {
    setName(e.target.value);
}

const handleImage = (e) => {
    setImage(e.target.value);
}

const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    props.editRestaurant(props.attributes.id, name, image);
}

// const handlePatch = (e) => {
//     e.preventDefault();
//     setIsEditing(false);
//     axios.patch(`http://localhost:3000/api/v1/restaurants/${props.attributes.id}`, {
//         restaurant: {
//             name: name,
//             image: image
//         }
//     })
//     .then(r => setIsEditing(r))
//     .catch(r => console.log(r))
// }

    return (
<div className="grid grid-cols-12 gap-4 " style={{width: '300%'}}>
        <div className="col-span-12 sm:col-span-6 xl:col-span-4" style={{width: '100%'}}>
            <div className="  rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-white to-white-300 transition duration-500 ease-in-out transform hover:scale-105 hover:transition-transform hover:transition-all" style={{width: '100%'}}>
                <div className="px-6 py-4" style={{width: '100%'}}>
                    {
                        isEditing
                        ?
                        <div>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">Restaurant Name:</label>
                                <input type="text" name="name" value={name} onChange={handleName} />
                                <label htmlFor="image">Image:</label>
                                <input type="text" name="image" value={image} onChange={handleImage} />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        :
                        <div>
                            <div className="flex items-center flex-shrink-0 text-black mb-2 text-xl font-semibold" style={{width: '100%'}}>
                                <img src={props.attributes.image} alt={props.attributes.name} style={{width: '25%'}}/>
                                <span className="ml-2">{props.attributes.name}</span>
                            </div>
                            <div className="flex items-center" style={{width: '100%'}}>
                                <span className="mt-2 inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" style={{width: '100%'}}>{props.attributes.avg_score}</span>
                            </div>
                            <div className="mt-4" style={{width: '100%'}}>
                            <Link to={`/restaurants/${props.attributes.slug}`} className="text-black bg-red-400 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:transition-transform hover:transition-all"
                            style={{width: '100%'}}>View Restaurant</Link>
                            </div>
                            <br></br>
                            <button className="text-black bg-red-400 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:transition-transform hover:transition-all" onClick={() => setIsEditing(true)}>Edit Restaurant</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default Restaurant;