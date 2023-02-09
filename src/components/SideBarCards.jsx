import React, { useState } from "react";
import "./SideBarCards.css";

export const SideBarCards = ({ companyName, code, entities, users }) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <div
      class="SideBarCard"
      onClick={toggle}
      className={"toggle--button " + (state ? "toggle--close" : "")}
    >
      <div className="card-child">
        <div>{companyName}</div>

        <div>{code}</div>
      </div>
      <div className="card-child">
        <div>{entities}</div>
        <div>{users}</div>
      </div>
    </div>
  );
};
