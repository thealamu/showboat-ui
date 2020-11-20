import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div id="notfounddiv">
      <img
        id="notfoundimage"
        alt="not found"
        src={window.location.origin + "/assets/notfound.svg"}
      />
      <br />
      <h1>Page not found</h1>
      <Link to="/">Go back home</Link>
    </div>
  );
}
