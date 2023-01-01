import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Header from '../../Header';
import Restaurant from '../Restaurants/Restaurant';


const Page = (props) => {
  const [place, setPlace] = useState({})
  const [review, setReview] = useState({})
  const [loaded, setLoaded] = useState(false)


  useEffect(()=>{
    const slug = props.match.attributes.slug
    const url = `http://localhost:3000/api/v1/restaurants/${slug}`
    axios.get(url)
    .then(resp => {
      setPlace(resp.data)
      setLoaded(true)
    })
    .catch(resp => console.log(resp))
  }, [])


  return (
  <div className='wrapper'>
      <div className='column'>
          <Restaurant
              attributes={place.data.attributes}
              reviews={place}
          />
          <div className='header'></div>
          <div className='reviews'></div>
      </div>
      <div>
          <div className='review-form'>[review form goes here]</div>
      </div>
  </div>
  )
}

export default Page;