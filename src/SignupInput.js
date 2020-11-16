import React from "react";
import TextField from "@material-ui/core/TextField";
import "./SignupInput.css";

export default function SignupInput(props) {
  const { label, value, ...others } = props;
  return (
    <div className="signupinput">
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
