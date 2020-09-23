import React from "react";
import MuiPagination from "@material-ui/lab/Pagination";
import { useSelector } from "react-redux";
import { selectAlbums } from "utils/selectors";
import { ROWS_PER_PAGE } from "utils/constants";

const Pagintation = ({ onPageChanged }) => {
  const { total = 0, offset } = useSelector(selectAlbums);
  const paginationCount = total % ROWS_PER_PAGE;
  const page = offset / ROWS_PER_PAGE + 1;
  const show = !!total;
  return (
    !!show && (
      <MuiPagination
        variant="outlined"
        color="primary"
        count={paginationCount}
        page={page}
        onChange={(evt, value) => onPageChanged(value)}
      />
    )
  );
};

export default Pagintation;
