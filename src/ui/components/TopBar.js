import React from "react";
import { AppBar } from "@material-ui/core";

const TopBar = ({ children }) => {
  return (
    <AppBar className="row appBar" position="static">
      {children}
    </AppBar>
  );
};

export default TopBar;
