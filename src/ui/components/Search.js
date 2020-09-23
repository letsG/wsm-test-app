import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

const SearchInput = ({ onSubmit, onChange, onReset, value }) => {
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  return (
    <TextField
      value={value}
      onChange={onChange}
      className="searchInput grow"
      onKeyPress={handleEnterKey}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="start">
            <IconButton onClick={onReset}>
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
