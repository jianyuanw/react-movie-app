function RemoveFavourite(props) {
  return (
    <div
      className="overlay"
      onClick={() => props.handleFavouritesClick(props.movie)}>
      Remove from Favourites
      <i className="bi bi-x-square ms-2"></i>
    </div>
  );
}

export default RemoveFavourite;