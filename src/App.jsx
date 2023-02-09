import React from "react";
import { Box, Grid } from "@mui/material";

import "./App.css";
import { MainBody } from "./components/MainBody.jsx";
import { SideBar } from "./components/SideBar.jsx";

function App() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item xs={2.5}>
            <SideBar />
          </Grid>
          <Grid item xs={9.5}>
            <MainBody />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
