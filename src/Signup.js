import React from "react";
import TextField from "@material-ui/core/TextField";
import "./Signup.css";
import Button from "@material-ui/core/Button";

function SignupInput(props) {
  const { label, ...others } = props;
  return (
    <div className="signupinput">
      <TextField label={label} fullWidth variant="outlined" {...others} />
    </div>
  );
}

export default function Signup(props) {
  return (
    <div className="signupcontainer">
      <SignupInput label="Username" />
      <SignupInput type="password" label="Password" />
      <SignupInput type="password" label="Confirm Password" />
      <p>
        Make sure it's at least 8 characters including a number and a lowercase
        letter.
      </p>
      <Button variant="contained" size="large" color="primary" disableElevation>
        Create Account
      </Button>
      <p style={{ color: "red" }}>
        This app does not run ads, your data is entirely yours and will not be
        shared with any third party.
      </p>
    </div>
  );
}
