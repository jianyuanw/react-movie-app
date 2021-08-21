function SearchBox(props) {
  return (
    <div className="col-sm-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={props.searchInput}
          onChange={(event) => props.setSearchInput(event.target.value)}
          placeholder="Type to search..."
        />
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.search()}
        >Search</button>
      </div>
    </div>
  );
}

export default SearchBox;