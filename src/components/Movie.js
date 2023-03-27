import React from 'react';
import './Movie.css';

const Movie = ({ poster, title, year, actors, genre, imdb, metascore, plot }) => {
  return (
    <div className='movie-container'>

      <div className="poster">
        <img src={poster} alt={title} />
      </div>

      <div className="item-container">
        <h3>Film címe: {title}</h3>
        <p><strong>Készült: {year}</strong></p>
        <p>Főszereplők: {actors}</p>
        <p>Kategória: {genre}</p>
        <p><strong>IMDB : {imdb} || Metascore: {metascore}</strong></p>
        <hr />
        <p>Bevezető: {plot}</p>
      </div>



    </div>
  )
}

export default Movie