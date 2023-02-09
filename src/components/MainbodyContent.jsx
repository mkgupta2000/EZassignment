import "./MainbodyContent.css";
import React from "react";

export const MainbodyContent = () => {
  return (
    <div>
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
    </div>
  );
};
