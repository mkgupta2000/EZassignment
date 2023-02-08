import React from "react";
import { Box } from "@mui/material";
import { MainBodyHeader } from "./MainBodyHeader";
import { Rectangle } from "./Rectangle";

export const MainBody = () => {
  return (
    <Box
      sx={{
        border: "1px solid green",
        height: "100%",
        widht: "60vw",
        padding: "0",
        margin: "0",
      }}
    >
      <div>
        <MainBodyHeader />
      </div>
      <div>
        <Rectangle />
      </div>
    </Box>
  );
};
