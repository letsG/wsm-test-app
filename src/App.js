import React, { useState } from "react";
import AlbumsList from "ui/components/List";
import { useDispatch } from "react-redux";
import { setSearchResultsAction } from "store/searchAlbums/actions";
import SearchInput from "ui/components/Search";
import Pagintation from "ui/components/Pagination";

function App() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("Дом с нормальными");
  const resetSearchValue = () => setSearchValue("");
  const onChangeInputValue = ({ target: { value } }) => setSearchValue(value);

  const onSubmitSearch = (page = 0) => {
    dispatch(setSearchResultsAction(searchValue, page));
  };

  return (
    <div className="App">
      <SearchInput
        onSubmit={onSubmitSearch}
        value={searchValue}
        onReset={resetSearchValue}
        onChange={onChangeInputValue}
      />
      <AlbumsList />
      <Pagintation onPageChanged={onSubmitSearch} />
    </div>
  );
}

export default App;
