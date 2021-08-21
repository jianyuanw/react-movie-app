function MovieList(props) {
  const FavouriteComponent = props.favouriteComponent;
  return (
    <div className="d-flex movie-list">
      {props.movies.map(movie => (
        <div className="m-3 image-container">
          <img src={movie.Poster} alt={movie.Title}></img>
          <FavouriteComponent
            movie={movie}
            handleFavouritesClick={props.handleFavouritesClick} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;