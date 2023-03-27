import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Movie from './components/Movie';


function App() {

  const [input, setInput] = useState("");
  const [movie, setMovie] = useState({})
  const [bool, setBool] = useState(false);

  const getMovie = () => {

    if (input != "") {
      setBool(true);

      axios.get(`https://www.omdbapi.com/?t=${input}&apikey=4fffa86`)
        .then(res => setMovie(res.data))
        .then(err => console.log(err))
    }
  }


  return (
    <div className="App">
      <header className="header-container">

        <h1>Film kereső</h1>

        <input type="text" placeholder='Írj be egy filmet' onChange={(change) => {

          setInput(change.target.value)
        }} />

        <button onClick={getMovie}>Keresés</button>

      </header>


      <div className="main-container">
        <div className={bool ? "" : "hide"}>


          <Movie

            title={movie.Title}
            poster={movie.Poster}
            year={movie.Year}
            imdb={movie.imdbRating}
            metascore={movie.Metascore}
            plot={movie.Plot}
            actors={movie.Actors}
            genre={movie.Genre}

          />

        </div>
      </div>
    </div>
  );
}

export default App;
