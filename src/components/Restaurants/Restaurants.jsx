import axios from 'axios';
import React, {useState, useEffect} from 'react';
// import { isHtmlElement } from 'react-router-dom/dist/dom';
import Restaurant from './Restaurant';
// import FastFoodies from './img/FastFoodies.png';

const Restaurants = () => {
    const [restaurants, setRestaurants] =useState([])

    useEffect(() => {
        //get all restaurants
        //update restaurants state

        axios.get('http://localhost:3000/api/v1/restaurants.json')
        .then(r => {
            setRestaurants(r.data.data)
        })
        .catch(r => console.log(r))

    }, [restaurants.length])

    

    const grid = restaurants.map(rest => {
        return (
            <div className='w-full bg-gray-300' style={{width: '100%'}}>
                <Restaurant 
                key={rest.attributes.name}
                attributes = {rest.attributes}
                id={rest.id}
                />
            </div>
        )
    })

    return (
        <>
            <div className="flex flex-col items-center justify-center text-center md:max-w-screen-xl mx-auto p-4 md:py-12 bg-gray-300" style={{height: '200%'}}>
                <h1 className="text-3xl font-bold">Fast-Foodies</h1>
                <div className="text-gray-500">Fast food reviews by the people for the people</div>
                <br></br>
                <div className="grid grid-cols-4 gap-4 w-full bg-gray-300">{grid}</div>
            </div>
        </>
    );
}

export default Restaurants;