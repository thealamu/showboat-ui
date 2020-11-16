import React from "react";
import "./Landing.css";
import Button from "@material-ui/core/Button";
import AuthDialog from "./AuthDialog.js";
import { setCookie, checkCookie, getCookie } from "./Cookies.js";
import Api from "./Api.js";

export default function Landing() {
  const [authOpen, setAuthOpen] = React.useState(false);

  let openAuth = () => {
    setAuthOpen(true);
  };

  let closeAuth = () => {
    setAuthOpen(false);
  };

  const isLoggedIn = () => checkCookie("session");

  const toPortfolio = async () => {
    //ask the server for the username
    let url = Api.BackendAddr + "/i/user";
    let resp = await fetch(url, {
      headers: {
        Authorization: `Bearer ${getCookie("session")}`,
      },
    });
    if (!resp.ok) {
      alert("something bad happened");
      return;
    }

    let payload = await resp.json();
    //navigate to user portfolio
    window.location.assign(window.location.origin + `/${payload.userid}`);
  };

  const logout = () => {
    setCookie("session", "", -1);
    window.location.reload(true);
  };

  return (
    <>
      <section id="header">
        <div className="right">
          {isLoggedIn() ? (
            <div>
              <Button
                id="headerlogout"
                onClick={logout}
                variant="text"
                size="large"
                color="secondary"
              >
                Logout
              </Button>
              <Button
                onClick={toPortfolio}
                variant="contained"
                size="large"
                color="secondary"
              >
                Portfolio
              </Button>
            </div>
          ) : (
            <div>
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
          )}
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
              You create amazing stuff,
              <br /> build a portfolio page to showcase them.{" "}
            </p>
            {isLoggedIn() ? (
              <Button
                onClick={toPortfolio}
                variant="outlined"
                size="large"
                color="secondary"
              >
                Go to Portfolio
              </Button>
            ) : (
              <Button
                onClick={openAuth}
                variant="contained"
                size="large"
                color="secondary"
              >
                Get started
              </Button>
            )}
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
          {isLoggedIn() ? (
            <Button
              onClick={toPortfolio}
              variant="contained"
              size="large"
              color="secondary"
            >
              Go to Portfolio
            </Button>
          ) : (
            <Button onClick={openAuth} variant="contained" color="secondary">
              Create an Account
            </Button>
          )}
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
