import { useState } from 'react'
import MovieDisplay from './components/MovieDisplay'
import Form from './components/Form'
import './App.css'


function App() {

    // Constant with your API Key
    const apiKey = "98e3fb1f";

  // this is the state for the movie
  // it is an object that will hold the movie data
  const [movie, setMovie] = useState(null)

  // this is the function that will be called when the form is submitted
  // it will fetch the movie data from the API
  const getMovie = async (movieName) => {
    try{
      const response = await fetch( `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`)
      const data = await response.json() 
      setMovie(data)
    }catch (error){
      console.log(error);
    }
  }

  // // This will run on the first render but not on subsquent renders
  // useEffect(() => {
  //   getMovie("Clueless");
  // }, []);
  
  return (
    <>
      <Form movieSearch = {getMovie} />
      <MovieDisplay movie={movie} />
    </>
  )
}

export default App
