import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import "./Domain.css";

import ListItemText from "@mui/material/ListItemText";

export default function NestedList() {
  return (
    <div className="domainList">
      <List
        subheader={
          <ListSubheader id="nested-list-subheader">Domains</ListSubheader>
        }
      >
        <ListItemButton>
          <ListItemText sx={{ color: "#112949" }} primary="@lucasfilms.com" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText
            sx={{ color: "#112949" }}
            primary="@lucasstarwars.com"
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemText sx={{ color: "#112949" }} primary="@starwars.com" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText sx={{ color: "#112949" }} primary="+5 Others" />
        </ListItemButton>
      </List>
    </div>
  );
}
