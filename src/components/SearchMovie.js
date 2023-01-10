import React, {useState} from 'react'
import MovieCard from './MovieCard';
export default function SearchMovie(){

    //state
    const [query, setQuery] = useState('');
    const [movies,setMovies] = useState([]);

    const SearchMovie = async (e) => {
    e.preventDefault();
   

  

    const url = `https://api.themoviedb.org/3/search/movie?api_key=caf31d07950feb3678db5714e1fcf945&language=en-US&query=${query}`
try{
   const res= await fetch(url);
   const data = await res.json();
   console.log(data.results);
   setMovies(data.results);
}catch (err){
    console.error(err)
}

}
  return (
    <>
    <form className="form" onSubmit={SearchMovie}>
        <label className="label" htmlFor="query"> Movie Name </label>
        <input className="input" type="text" name="query" placeholder="Jurasic Park"
        value={query} onChange={(e)=> setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button> 
    </form>
    <div className="card-list">
     {movies.filter(movie=> movie.poster_path).map(movie=>( 
      <MovieCard movie={movie} key={movie.id} />
     ))}
     </div>
</>
  )
     }
