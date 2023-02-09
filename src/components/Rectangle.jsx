import "./Rectangle.css";
import React from "react";
import NestedList from "./Domains";

export const Rectangle = () => {
  return (
    <div className="Rectangle">
      <div className="rec-boxone">
        <div className="pdfbox">
          <img src="./images/downloadpdf.jpg" className="pdf-logo" alt="Cpdf" />
        </div>
        <div className="pvt-lmt">
          <img
            src="./images/Lucas Films Private Limited.jpg"
            className="Lucasfilmspvtlmt"
            alt="lucas films private limited"
          />
        </div>
        <div>
          <button className="Edit-btn">Edit</button>
        </div>
      </div>
      <div className="boxDomain"></div>
      <div className="boxCompany-code">
        <p style={{ color: "grey" }}>Company Code</p>
        <p style={{ color: "#112949" }}>LUCF</p>
      </div>
      <div className="boxCompany-logo">
        <p style={{ color: "grey" }}>Company Logo</p>
        <p style={{ color: "#112949" }}>Unavailable</p>
      </div>
    </div>
  );
};
