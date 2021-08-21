import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import AddFavourite from './components/AddFavourite';
import RemoveFavourite from './components/RemoveFavourite';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [favourites, setFavourites] = useState([]);

  async function getMovies(searchTerm) {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=${searchTerm}`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  function search() {
    setSearchTerm(searchInput);
  }

  function saveToLocalStorage(items) {
    localStorage.setItem('react-movie-app-favourites', JSON.stringify(items));
  }

  function addToFavourites(movie) {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  function removeFromFavourites(movie) {
    const newFavouriteList = favourites.filter(favourite => {
      return favourite.imdbID !== movie.imdbID;
    });
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }

  useEffect(() => {
    const favouritesFromLocalStorage = JSON.parse(
      localStorage.getItem('react-movie-app-favourites')
    );
    if (favouritesFromLocalStorage) {
      setFavourites(favouritesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    getMovies(searchTerm);
  }, [searchTerm]);

  return (
    <div className="container-fluid">
      <div className="text-center text-uppercase fw-bold border border-white">
        {process.env.NODE_ENV}
      </div>
      <div className="row my-4 d-flex align-items-center">
        <MovieListHeading heading='Movies' />
        <SearchBox
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          search={search}
        />
      </div>
      <MovieList
        movies={movies}
        favouriteComponent={AddFavourite}
        handleFavouritesClick={addToFavourites}
      />
      <div className="row my-4">
        <MovieListHeading heading="Favourites" />
      </div>
      <MovieList
        movies={favourites}
        favouriteComponent={RemoveFavourite}
        handleFavouritesClick={removeFromFavourites}
      />
    </div>
  );
}

export default App;
