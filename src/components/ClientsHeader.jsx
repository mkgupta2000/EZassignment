import React, { useState } from "react";
import "./ClientsHeader.css";

import AddBoxIcon from "@mui/icons-material/AddBox";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export const ClientsHeader = () => {
  const [state, setState] = useState(true);
  const toggle = () => {
    setState(!state);
  };
  return (
    <div className="ClientsHeader">
      <div className="Box-one">
        <div className="">
          <img
            src="./images/Clients.jpg"
            className="Clients-Image"
            alt="Clients"
          />
        </div>
        <div onClick={toggle}>
          {state ? (
            <KeyboardDoubleArrowDownIcon color="primary" />
          ) : (
            <KeyboardDoubleArrowUpIcon color="primary" />
          )}
        </div>
        <div className="Creation-Time">Creation Time</div>
        <div className="AddBoxIcon">
          <AddBoxIcon fontSize="large" color="primary" />
        </div>
      </div>
      <div className="box-two">
        <input
          type="text"
          className="searchTerm"
          placeholder="Company,Entity,User,domain,Service,Location"
        ></input>
        <button type="submit" class="searchButton">
          <SearchIcon />
        </button>
      </div>
    </div>
  );
};
