import "./Rectangle.css";
import React from "react";

export const Rectangle = () => {
  return (
    <div className="Rectangle">
      <div className="rec-boxone">
        <div className="pvt-lmt">
          <div className="pdfbox">
            <img
              src="./images/downloadpdf.jpg"
              className="pdf-logo"
              alt="Cpdf"
            />
          </div>
          <h2>Lucas Films Private Limited</h2>
          {/* <img
            src="./images/Lucas Films Private Limited.jpg"
            className="Lucasfilmspvtlmt"
            alt="lucas films private limited"
          /> */}
        </div>
        <div>
          <button className="Edit-btn">Edit</button>
        </div>
      </div>
      <div className="boxDomain">
        <h3>Domains</h3>

        <p className="p-p">@lucasfilm.com</p>
        <p className="p-p">@lucasstarwars.com</p>
        <p className="p-p">@starwars.com</p>
        <p className="p-p">2 others</p>
      </div>
      <div className="boxCompany-code">
        <p className="p-p" style={{ color: "grey" }}>
          Company Code
        </p>
        <p className="p-p" style={{ color: "#112949" }}>
          LUCF
        </p>
      </div>
      <div className="boxCompany-logo">
        <p className="p-p" style={{ color: "grey" }}>
          Company Logo
        </p>
        <p className="p-p" style={{ color: "#112949" }}>
          Unavailable
        </p>
      </div>
    </div>
  );
};
