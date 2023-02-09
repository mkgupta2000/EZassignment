import React from "react";

import { SideRibbon } from "./SideRibbon";
import { SideBody } from "./SideBody";
import "./SideBar.css";

export const SideBar = () => {
  return (
    <>
      <div className="Sidebar-Maincontainer">
        <div className="Side-Ribbon">
          <SideRibbon />
        </div>
        <div className="Side-Body">
          <SideBody />
        </div>
      </div>
    </>
  );
};
