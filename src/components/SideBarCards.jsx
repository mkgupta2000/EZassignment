import React, { useState } from "react";
import "./SideBarCards.css";

export const SideBarCards = () => {
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
      {state ? "mckinsey & company" : "company name"}
    </div>
  );
};
