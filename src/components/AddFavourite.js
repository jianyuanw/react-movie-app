function AddFavourite(props) {
  return (
    <div
      className="overlay"
      onClick={() => props.handleFavouritesClick(props.movie)}>
      Add to Favourites
      <i className="bi bi-heart-fill ms-2"></i>
    </div>
  );
}

export default AddFavourite;