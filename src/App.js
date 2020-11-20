import "./App.css";
import Landing from "./Landing.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Portfolio from "./Portfolio.js";
import NotFound from "./NotFound.js";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1976d2",
      },
      secondary: {
        main: "#a5d6a7",
      },
    },
  });

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/404" exact component={NotFound} />
            <Route path="/:uid" exact component={Portfolio} />
            <Route path="/" exact component={Landing} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
