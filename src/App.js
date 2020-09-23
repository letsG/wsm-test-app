import React, { useState } from "react";
import AlbumsList from "ui/components/List";
import { useDispatch } from "react-redux";
import { setSearchResultsAction } from "store/searchAlbums/actions";
import SearchInput from "ui/components/Search";
import Pagintation from "ui/components/Pagination";
import TopBar from "ui/components/TopBar";
import Container from "@material-ui/core/Container";
import { IconButton } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import StarBorder from "@material-ui/icons/StarBorder";

function App() {
  const dispatch = useDispatch();
  const [favoritesView, setFavoritesView] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const favoritesViewToggle = () => setFavoritesView(!favoritesView);
  const onChangeInputValue = ({ target: { value } }) => setSearchValue(value);

  const onSubmitSearch = (page = 1) => {
    console.log("onSubmitSearch");
    setFavoritesView(false);
    dispatch(setSearchResultsAction(searchValue, page));
  };

  const resetSearchValue = () => setSearchValue("");

  const AppBarIcon = favoritesView ? Star : StarBorder;

  return (
    <Container maxWidth={false} disableGutters className="mainContainer">
      <TopBar>
        <SearchInput
          onSubmit={onSubmitSearch}
          value={searchValue}
          onReset={resetSearchValue}
          onChange={onChangeInputValue}
        />
        <IconButton onClick={favoritesViewToggle}>
          <AppBarIcon />
        </IconButton>
      </TopBar>
      <AlbumsList favorites={favoritesView} />
      {!favoritesView && <Pagintation onPageChanged={onSubmitSearch} />}
    </Container>
  );
}

export default App;
