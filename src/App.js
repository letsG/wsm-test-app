import React, { useEffect } from "react";
import AlbumsList from "ui/components/List";
import { useDispatch } from "react-redux";
import { setSearchResultsAction } from "store/searchAlbums/actions";
import SearchInput from "ui/components/Search";

function App() {
  const dispatch = useDispatch();

  const onSubmitSearch = (searchString) => {
    dispatch(setSearchResultsAction(searchString));
  };

  return (
    <div className="App">
      <SearchInput onSubmit={onSubmitSearch} />
      <AlbumsList />
    </div>
  );
}

export default App;
