import React from "react";
import "./Signup.css";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Api from "./Api.js";
import { setCookie } from "./Cookies.js";
import SignupInput from "./SignupInput.js";
import { isValidPassword, isValidUsername } from "./Auth.js";

export default function Signup(props) {
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameHelperText, setUsernameHelperText] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState("");

  const [confpassword, setConfPassword] = React.useState("");
  const [confPwdError, setConfPwdError] = React.useState(false);
  const [confPwdHelperText, setConfPwdHelperText] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);
  const [unameAvailable, setUnameAvailable] = React.useState(true);

  const updateUsername = async function (e) {
    let value = e.target.value.trim();
    //cap username length at 10 and do not accept symbols
    if (value.length > 10 || !isValidUsername(value)) {
      return;
    }
    setUsername(value);

    //username length must be more than 4 chars before existence checks
    if (value.length < 4) {
      return;
    }

    //validate username does not exist already
    let resp = await fetch(Api.BackendAddr + `/${value}`, {
      method: "HEAD",
    });
    if (resp.ok) {
      setUnameAvailable(false);
      setUsernameHelperText("Username is not available");
      return;
    }
    setUnameAvailable(true);
    setUsernameError(false);
    setUsernameHelperText("");
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfPassword = (e) => {
    setConfPassword(e.target.value);
  };

  //do the actual signup
  const requestSignup = async () => {
    let payload = {
      userid: username,
      password: password,
    };

    //make the request
    console.log(`Signing ${payload.userid} up`);
    let resp = await fetch(Api.BackendAddr + `/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    });
    if (resp.ok) {
      let data = await resp.json();
      //save session token
      setCookie("session", data.token, 7);
      //navigate to user portfolio
      window.location.assign(window.location.origin + `/${username}`);
    } else {
      //something serious happened
      alert("Something went wrong");
    }
  };

  const createAccount = () => {
    //do validations
    if (username === "") {
      setUsernameError(true);
      setUsernameHelperText("Username is required");
      return;
    }
    if (username.length < 4) {
      setUsernameError(true);
      setUsernameHelperText("Username must be at least 4 characters");
      return;
    }
    if (!unameAvailable) {
      setUsernameHelperText("Username is not available");
      return;
    }
    setUsernameError(false);
    setUsernameHelperText("");

    if (password === "") {
      setPasswordError(true);
      setPasswordHelperText("Password cannot be empty");
      return;
    }
    if (!isValidPassword(password)) {
      setPasswordError(true);
      setPasswordHelperText("Must be at least 8 characters");
      return;
    }
    setPasswordError(false);
    setPasswordHelperText("");

    if (password !== confpassword) {
      setConfPwdError(true);
      setConfPwdHelperText("Passwords do not match");
      return;
    }
    setConfPwdError(false);
    setConfPwdHelperText("");

    setIsLoading(true);
    requestSignup();
  };

  return (
    <div className="signupcontainer">
      <SignupInput
        onChange={updateUsername}
        value={username}
        label="Username"
        helperText={usernameHelperText}
        error={usernameError || !unameAvailable}
      />

      <SignupInput
        onChange={updatePassword}
        value={password}
        type="password"
        label="Password"
        helperText={passwordHelperText}
        error={passwordError}
      />

      <SignupInput
        onChange={updateConfPassword}
        value={confpassword}
        type="password"
        label="Confirm Password"
        helperText={confPwdHelperText}
        error={confPwdError}
      />

      <p className="littletext">You can always change your username later.</p>
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Button
          onClick={createAccount}
          variant="contained"
          size="large"
          color="primary"
          disableElevation
        >
          Create Account
        </Button>
      )}
      <p className="littletext" style={{ color: "red" }}>
        This app does not run ads, your data is entirely yours and will not be
        shared with any third party.
      </p>
    </div>
  );
}
