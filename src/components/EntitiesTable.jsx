import "./EntitiesTable.css";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import React, { useState } from "react";

export const EntitiesTable = () => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  return (
    <div className="Entities-dropdown">
      <div className="Table-Container">
        <div>Riyadh, Kingdom of Saudi Arabia</div>
        <div>Lucas Films Private Limited</div>
        <div>LUCF01</div>
        <div>3 June 2022 - 5 June 2030</div>
        <div>External</div>
        <div onClick={toggle}>
          {!state ? (
            <KeyboardArrowDownRoundedIcon color="primary" fontSize="large" />
          ) : (
            <KeyboardArrowUpRoundedIcon color="primary" fontSize="large" />
          )}
        </div>
      </div>
      {state ? (
        <div className="table-inner">
          <div>
            <div className="boxDomai formname">
              <h3>Address</h3>

              <p className="p-p">@lucasfilm.com</p>
              <p className="p-p">@lucasstarwars.com</p>
              <p className="p-p">@starwars.com</p>
              <p className="p-p">2 others</p>
            </div>
            <div className="boxCompany-cod formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Code
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                LUCF
              </p>
            </div>
            <div className="boxCompany-log formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Logo
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                Unavailable
              </p>
            </div>
          </div>
          <div>
            <div className="boxCompany-cod formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Code
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                LUCF
              </p>
            </div>
            <div className="boxCompany-log formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Logo
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                Unavailable
              </p>
            </div>
            <div className="boxCompany-cod formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Code
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                LUCF
              </p>
            </div>
          </div>
          <div>
            <div className="boxCompany-log formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Logo
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                Unavailable
              </p>
            </div>
            <div className="boxCompany-cod formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Code
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                LUCF
              </p>
            </div>
            <div className="boxCompany-log formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Logo
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                Unavailable
              </p>
            </div>
            <div className="boxCompany-log formname">
              <p className="p-p" style={{ color: "grey" }}>
                Company Logo
              </p>
              <p className="p-p" style={{ color: "#112949" }}>
                Unavailable
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
