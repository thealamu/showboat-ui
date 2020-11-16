import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Login.css";
import Button from "@material-ui/core/Button";

function LoginInput(props) {
  const { label, ...others } = props;
  return (
    <div className="logininput">
      <TextField label={label} fullWidth variant="outlined" {...others} />
    </div>
  );
}

export default function Login(props) {
  return (
    <div className="logincontainer">
      <h2>Login to Showboat</h2>
      <LoginInput label="Username" />
      <LoginInput type="password" label="Password" />
      <Button
        id="loginbutton"
        variant="contained"
        size="large"
        color="primary"
        disableElevation
      >
        Login
      </Button>
    </div>
  );
}
