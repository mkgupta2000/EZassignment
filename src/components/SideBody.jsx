import React from "react";
import "./SideBody.css";
import { ClientsHeader } from "./ClientsHeader";
import { CompanyNameList } from "./CompanyNameList";

export const SideBody = () => {
  return (
    <>
      <div className="SideBody-Container">
        <ClientsHeader />
      </div>
      <div className="CompanyNameList">
        <CompanyNameList />
      </div>
    </>
  );
};
