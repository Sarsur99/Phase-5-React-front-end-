import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Restaurant from './Restaurant';

const Restaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/api/v1/restaurants.json')
        .then(response => {
          setRestaurants(response.data.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);
  
    const handleAddRestaurant = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const image = event.target.image.value;
  
      axios.post('http://localhost:3000/api/v1/restaurants.json', {
        name: name,
        image: image
      })
        .then(response => {
          setRestaurants([...restaurants, response.data.data]);
          event.target.reset();
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const handleDelete = (id) => {
      axios.delete(`http://localhost:3000/api/v1/restaurants/${id}`)
        .then(response => {
          const updatedRestaurants = restaurants.filter(rest => rest.id !== id);
          setRestaurants(updatedRestaurants);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    const restaurantList = restaurants.map(rest => {
      return (
        <div key={rest.attributes.name} className='w-full bg-gradient-to-r from-pink-500 to-red-500' style={{width: '100%'}}>
          <Restaurant 
            key={rest.attributes.name}
            attributes={rest.attributes}
            id={rest.id}
            handleDelete={() => handleDelete(rest.id)}
          />
        </div>
      );
    });

  return (
    <>
      <div className="flex flex-col items-center justify-center text-center md:max-w-screen-xl mx-auto p-4  bg-gradient-to-r from-pink-500 to-red-500 " style={{height: '100%'}}>
        <h1 className="text-3xl font-bold ">Fast-Foodies</h1>
        <div className="text-gray-500 ">Fast food reviews by the people for the people</div>
        <br></br>
        <div className="grid grid-cols-4 gap-4 w-full bg-gradient-to-r from-pink-500 to-red-500">
          {restaurantList}
          <div className='w-full bg-gradient-to-r from-pink-500 to-red-500' style={{width: '100%'}}>
            <form onSubmit={handleAddRestaurant}>
              <div className='flex flex-col'>
                <input type='text' name='name' placeholder='Name' required className='mb-2 px-3 py-2 border rounded-md'></input>
                <input type='text' name='image' placeholder='Image' required className='mb-2 px-3 py-2 border rounded-md'></input>
                <button type='submit' className='px-3 py-2 bg-blue-500 text-white font-bold rounded-md'>Add Restaurant</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurants;
