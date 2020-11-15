import './App.css'
import Landing from './Landing.js'
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { BrowserRouter, Route } from 'react-router-dom'
import Portfolio from './Portfolio.js'

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
			<BrowserRouter>
	  			  <Route path="/" exact component={Landing} />
	  			  <Route path="/:uid" exact component={Portfolio} />
		   </BrowserRouter>
		</ThemeProvider>
	  </>
  );
}

export default App;
