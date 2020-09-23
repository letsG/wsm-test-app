import React from "react";
import IconButton from "@material-ui/core/IconButton";
import StarBorder from "@material-ui/icons/StarBorder";
import Star from "@material-ui/icons/Star";
import { useDispatch } from "react-redux";
import {
  ADD_FAVORITE_ALBUM,
  DELETE_FAVORITE_ALBUM,
} from "store/favoriteAlbums/actionNames";
import { Card, CardContent, Typography, CardActions } from "@material-ui/core";
const defaultTitle = "Unknown";
const ListItem = ({
  data: { title: albumName = defaultTitle, "artist-credit": artistsArray },
  data: albumData,
  favorite = false,
}) => {
  const mainArtist = artistsArray[0];
  const { name: artistName } = mainArtist;
  const dispatch = useDispatch();
  const Icon = favorite ? Star : StarBorder;
  const onStarClick = () => {
    const type = favorite ? DELETE_FAVORITE_ALBUM : ADD_FAVORITE_ALBUM;
    dispatch({
      type,
      data: albumData,
    });
  };
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom>
          {albumName} by {artistName}
        </Typography>
        <CardActions>
          <IconButton onClick={onStarClick} aria-label="Favorite">
            <Icon />
          </IconButton>
        </CardActions>
      </CardContent>
    </Card>
  );
};
export default ListItem;
