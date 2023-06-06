import { Box } from "@mui/material";
import React from "react";

const HorizontalScrollbar = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
        >
          itemId
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollbar;
