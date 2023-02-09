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
      </div>
    </div>
  );
};
