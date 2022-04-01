import { TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import React from "react";
// import Box from "@mui/material/Box";

const SearchBar = (props) => {
  return (
    <>
      <form
        onSubmit={props.submit}
        style={{ margin: "2rem 0" }}
        className="mb-4"
      >
        <TextField
          onChange={props.change}
          fullWidth
          variant="standard"
          color="success"
          // focused
          label="Search For Anything"
        />
      </form>
    </>
  );
};

export default SearchBar;
