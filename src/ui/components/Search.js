import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";

const SearchInput = ({ onSubmit }) => {
  const [value, setValue] = useState("Дом с нормальными");
  const resetValue = () => setValue("");
  const onChangeInputValue = ({ target: { value } }) => setValue(value);
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      onSubmit(value);
    }
  };
  return (
    <TextField
      value={value}
      onChange={onChangeInputValue}
      onKeyPress={handleEnterKey}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
        endAdornment: value && (
          <InputAdornment position="start">
            <IconButton onClick={resetValue}>
              <Close />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
