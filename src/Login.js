import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { isValidUsername } from "./Auth.js";
import Api from "./Api.js";
import { setCookie } from "./Cookies.js";
import { useHistory } from "react-router-dom";

function LoginInput(props) {
  const { label, value, ...others } = props;
  return (
    <div className="logininput">
      <TextField
        value={value}
        label={label}
        fullWidth
        variant="outlined"
        {...others}
      />
    </div>
  );
}

export default function Login(props) {
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [usernameError, setUsernameError] = React.useState(false);
  const [usernameHelperText, setUsernameHelperText] = React.useState("");

  const [password, setPassword] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordHelperText, setPasswordHelperText] = React.useState("");

  const [isLoading, setIsLoading] = React.useState(false);

  const requestLogin = async () => {
    let payload = {
      userid: username,
      password: password,
    };

    //make the request
    console.log(`Logging ${payload.userid} in`);
    await fetch(Api.BackendAddr + `/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(payload),
    })
      .then((resp) => {
        if (resp.ok) {
          let data = resp.json();
          //save session token
          setCookie("session", data.token, 7);
          //navigate to user portfolio
          history.push(`/${username}`);
          //window.location.assign(window.location.origin + `/${username}`);
        } else {
          //unauthorized
          setUsernameError(true);
          setPasswordError(true);
          setPasswordHelperText("username or password is invalid");
          setIsLoading(false);
        }
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  };

  const updateUsername = (e) => {
    let value = e.target.value.trim();
    if (!isValidUsername(value)) {
      return;
    }
    setUsername(value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    //do validations
    if (username === "") {
      setUsernameError(true);
      setUsernameHelperText("Username is required");
      return;
    }
    if (username.length < 4) {
      setUsernameError(true);
      setUsernameHelperText("invalid username");
      return;
    }
    setUsernameError(false);
    setUsernameHelperText("");
    if (password === "") {
      setPasswordError(true);
      setPasswordHelperText("Password cannot be empty");
      return;
    }
    setPasswordError(false);
    setPasswordHelperText("");

    setIsLoading(true);
    requestLogin();
  };

  return (
    <div className="logincontainer">
      <h2>Login to Showboat</h2>
      <LoginInput
        error={usernameError}
        helperText={usernameHelperText}
        value={username}
        onChange={updateUsername}
        label="Username"
      />
      <LoginInput
        value={password}
        error={passwordError}
        helperText={passwordHelperText}
        onChange={updatePassword}
        type="password"
        label="Password"
      />
      {isLoading ? (
        <CircularProgress color="primary" />
      ) : (
        <Button
          id="loginbutton"
          variant="contained"
          size="large"
          color="primary"
          disableElevation
          onClick={handleLogin}
        >
          Login
        </Button>
      )}
    </div>
  );
}
