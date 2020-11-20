import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./AuthDialog.css";
import Signup from "./Signup.js";
import Login from "./Login.js";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function AuthDialog(prop) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog onClose={prop.onClose} open={prop.open} maxWidth="xs" fullWidth>
      <DialogContent id="authdialog-content">
        <AppBar position="static">
          <Tabs variant="fullWidth" value={value} onChange={handleChange}>
            <Tab label="Create an Account" />
            <Tab label="Login" />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Signup />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Login />
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}
