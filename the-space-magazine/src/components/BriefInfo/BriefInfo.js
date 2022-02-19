import React from "react";
import "./BriefInfo.css";

const BriefInfo = (props) => {
  return (
    <div className="info-brief">
      <div>
        <img src={props.image} className="trending-image" alt="Brief Info" />
        <h2>{props.title}</h2>
        {props.briefInfo}
      </div>
    </div>
  );
};

export default BriefInfo;
