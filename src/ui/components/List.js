import React from "react";
import ListItem from "./ListItem";
import { Container } from "@material-ui/core";
const { useSelector } = require("react-redux");
const { selectAlbums, selectFavorites } = require("utils/selectors");

const AlbumsList = ({ favorites }) => {
  const { searchedAlbumsArray = [] } = useSelector(selectAlbums);
  const { favoritesNormalized = {}, favoritesArray = [] } = useSelector(
    selectFavorites
  );
  const mapArray = favorites ? favoritesArray : searchedAlbumsArray;
  return (
    <Container className="albumsList" maxWidth={false}>
      {mapArray.map((album) => {
        const { id: albumId } = album;
        const favorite = !!favoritesNormalized[albumId];
        return (
          <ListItem
            key={`album-list-item-${albumId}`}
            data={album}
            favorite={favorite}
          />
        );
      })}
    </Container>
  );
};

export default AlbumsList;
