import "./Rectangle.css";
import React from "react";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

export const Rectangle = () => {
  return (
    <div className="Rectangle">
      <div className="rec-boxone">
        <div className="pdf-icon">pdf</div>
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
    </div>
  );
};
