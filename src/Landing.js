import React from "react";
import "./Landing.css";
import Button from "@material-ui/core/Button";
import AuthDialog from "./AuthDialog.js";

export default function Landing() {
  const [authOpen, setAuthOpen] = React.useState(false);

  let openAuth = () => {
    setAuthOpen(true);
  };

  let closeAuth = () => {
    setAuthOpen(false);
  };

  return (
    <>
      <section id="header">
        <div className="right">
          <Button onClick={openAuth} id="headerlogin" color="secondary">
            Login
          </Button>
          <Button
            onClick={openAuth}
            variant="contained"
            size="small"
            color="secondary"
          >
            Create an Account
          </Button>
        </div>
        <div id="headercontainer">
          <img
            id="appicon"
            alt="App icon"
            src={window.location.origin + "/assets/portfolio.svg"}
          />
          <div id="headercharge">
            <h1> Showboat </h1>
            <p>
              {" "}
              You create amazing stuff,
              <br /> build a portfolio page to showcase them.{" "}
            </p>
            <Button
              onClick={openAuth}
              variant="contained"
              size="large"
              color="secondary"
            >
              Get started
            </Button>
          </div>
        </div>
      </section>
      <section id="desc"></section>
      <section id="intro">
        <img
          id="introimg"
          alt="Interview"
          src={window.location.origin + "/assets/interview.svg"}
        />
        <div id="intromessage">
          <p id="charge">
            Get that job you've <br /> always wanted.
          </p>
          <p id="explain">
            {" "}
            Keep your portfolio up to date <br /> Share with recruiters
          </p>
          <Button onClick={openAuth} variant="contained" color="secondary">
            Create an Account
          </Button>
        </div>
      </section>
      <footer>
        <p>
          {" "}
          © 2020, <a href="https://thealamu.tech">Faithfulness Alamu</a>. All
          rights reserved.{" "}
        </p>
      </footer>
      <AuthDialog onClose={closeAuth} open={authOpen} />
    </>
  );
}
