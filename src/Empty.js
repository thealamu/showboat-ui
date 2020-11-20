import React from "react";
import "./Empty.css";

export default function Empty(props) {
  return (
    <div id="emptydiv" className="center">
      <img
        id="emptyimage"
        alt="empty portfolio"
        src={window.location.origin + "/assets/empty.svg"}
      />
    </div>
  );
}
