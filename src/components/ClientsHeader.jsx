import React from "react";
import "./ClientsHeader.css";
import AddBoxIcon from "@mui/icons-material/AddBox";

export const ClientsHeader = () => {
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
        <div>Arrow icon</div>
        <div className="Creation-Time">Creation Time</div>
        <div>
          <AddBoxIcon color="primary" className="AddBoxIcon" />
        </div>
      </div>
      <div className="">
        <img src="./images/Group 470.jpg" className="Box-two" alt="searchbar" />
      </div>
    </div>
  );
};
