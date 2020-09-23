import React from "react";
import ListItem from "./ListItem";
const { useSelector } = require("react-redux");
const { selectAlbums, selectFavorites } = require("utils/selectors");

const AlbumsList = () => {
  const { searchedAlbumsArray = [] } = useSelector(selectAlbums);
  const { favoritesNormalized = {} } = useSelector(selectFavorites);
  return searchedAlbumsArray.map((album) => {
    const { id: albumId } = album;
    const favorite = !!favoritesNormalized[albumId];
    return (
      <ListItem
        key={`album-list-item-${albumId}`}
        data={album}
        favorite={favorite}
      />
    );
  });
};

export default AlbumsList;
