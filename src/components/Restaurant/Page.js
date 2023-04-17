  import React, {useState, useEffect, Fragment} from 'react';
  import axios from 'axios';
  import Header from '../../Header';
  import Restaurant from '../Restaurants/Restaurant';
  import { useParams } from 'react-router-dom';
  import ReviewForm from '../../ReviewForm';
  import Review from '../../Review';



  const Page = () => {
    // Get place state from localStorage
    const savedPlaceState = localStorage.getItem('place');
    const {id} = useParams()

    const [place, setPlace] = useState(savedPlaceState ? JSON.parse(savedPlaceState) : {});
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)
    const [deleted, setDeleted] = useState(false)
    const {slug} = useParams()
    console.log(id)

    useEffect(()=>{
      const url = `http://localhost:3000/api/v1/restaurants/${slug}`
      axios.get(url)
      .then(resp => {
        setPlace(resp.data)
        setLoaded(true)
      })
      .catch(resp => console.log(resp))
    }, [slug])

  //Save the place state to localStorage
    useEffect(() => {
      localStorage.setItem('place', JSON.stringify(place));
    }, [place]);

    const handleChange = (e) =>{
      e.preventDefault();

      setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

      console.log('review:', review)
    }

    const handleDestroy = (id, e) => {
      console.log(id)
      e.preventDefault()
      const csrfToken = document.querySelector('[name=csrf-token]')
      axios.defaults.headers.common['X-CSRFToken'] = csrfToken

      const url =`http://localhost:3000/api/v1/reviews/${id}`

      axios.delete(url)
      .then(resp => {
        const included = place.included.filter(item => item.id !== id)
        setPlace({...place, included})
        setDeleted(true)
      })
      .catch(resp => console.log(resp))
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
    
      const csrfToken = document.querySelector('[name=csrf-token]')
      axios.defaults.headers.common['X-CSRFToken'] = csrfToken
    
      const restaurant_id = place.data.id
      axios.post('http://localhost:3000/api/v1/reviews', {review, restaurant_id})
      .then(resp => {
        const newReview = resp.data.data;
        const included = [...place.included, newReview];
        setPlace({...place, included});
        setReview({title: "", description: "", score: 0});
      })
      .catch(resp => {})
    }
    const setRating = (score, e ) => {
      e.preventDefault()
      setReview({...review, score})
    }

    let reviews
    if(loaded && place.included) {
    reviews = place.included.map( (item, index ) => {
        return(
          <Review
            key={index}
            attributes={item.attributes}
            handleDestroy={handleDestroy}
            id={item.id}
          />
        )
      })
    }


    return (
      <div class="flex flex-col lg:flex-row">
    <div class="lg:w-2/3 lg:pr-8">
      <div class="mb-8">
        <Header
          attributes={place.data.attributes}
          reviews={place.included}
        />
      </div>
      {reviews}
    </div>
    <div class="lg:w-1/3">
      <br></br>
      <div class="bg-white p-6 pr-8 mb-8 rounded">
        <ReviewForm 
          handleChange={handleChange} 
          handleSubmit={handleSubmit}
          attributes={place.data.attributes}
          review={review}
          setRating={setRating}
        />
      </div>
    </div>
  </div>

    )
  }

  export default Page;