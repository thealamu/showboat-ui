import React from 'react'
import './Landing.css'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

export default function Landing() {
	return (
		<div id="header">
			<div className="right">
				<Button id="headerlogin" color="secondary">Login</Button>
				<Button variant="contained" size="small" color="secondary">Create an Account</Button>
			</div>
			<div id="headercontainer">
				<img id="appicon" src={window.location.origin + '/assets/portfolio.svg'} />
				<div id="headercharge">
					<h1> Showboat </h1>
					<p> You create amazing stuff,<br/> build a portfolio page to showcase them. </p>
					<Button variant="contained" size="large" color="secondary">Get started</Button>
				</div>
			</div>
		</div>
	)
}
