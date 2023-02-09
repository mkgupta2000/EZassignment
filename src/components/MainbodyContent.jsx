import "./MainbodyContent.css";
import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { EntitiesTable } from "./EntitiesTable";

export const MainbodyContent = () => {
  return (
    <div className="Body-Container">
      <div className="MainbodyNavbar">
        <ul>
          <li>
            <a class="active" href="#Entities">
              Entities
            </a>
          </li>
          <li>
            <a href="#Invoice COdes">Invoice Codes</a>
          </li>
          <li>
            <a href="#Users">Users</a>
          </li>
        </ul>
      </div>
      <div className="MainbodyContent">
        <div className="topcontent">
          <div>Entities</div>
          <div>
            <AddBoxIcon color="primary" fontSize="large" />
          </div>
        </div>
        <div className="Entities-Table">
          <EntitiesTable />
          <EntitiesTable />
          <EntitiesTable />
        </div>
      </div>
    </div>
  );
};
