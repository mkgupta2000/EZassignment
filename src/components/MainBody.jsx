import React from "react";
import { Box } from "@mui/material";
import { MainBodyHeader } from "./MainBodyHeader";
import { Rectangle } from "./Rectangle";

import { MainbodyContent } from "./MainbodyContent";

export const MainBody = () => {
  return (
    <Box
      sx={{
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
      <div>
        <MainbodyContent />
      </div>
    </Box>
  );
};
