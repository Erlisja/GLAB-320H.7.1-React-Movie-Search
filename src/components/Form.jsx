import React from 'react'
import { useState } from 'react'


function Form(props) {
    const [formData, setFormData] =useState({
        movieName: ''
    })
      // handleChange - updates formData when we type into form
    const handleChange = (event) => {
        // Use the event object to detect key, and value to update the state
        setFormData({ ...formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        // Prevent the default action of submitting the form
        event.preventDefault();
    // Pass the search term to moviesearch prop, which is App's getMovie function
    props.movieSearch(formData.movieName);
    };


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
             type='text'
             placeholder='Enter Movie Name'
             name='movieName'
             onChange={handleChange}
             value={formData.movieName} />
            <input type='submit' value='Search' />
        </form>
    </div>
  )
}

export default Form