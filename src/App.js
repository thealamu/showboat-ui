import './App.css';
import Landing from './Landing.js'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
	const theme = createMuiTheme({
	  palette: {
			  primary: {
					main: '#1976d2',
			  },
			  secondary: {
					main: '#a5d6a7',
			  },
		},
	})

  return (
	  <>
		<CssBaseline />
		<ThemeProvider theme={theme}> 
			  <Landing />
		</ThemeProvider>
	  </>
  );
}

export default App;
