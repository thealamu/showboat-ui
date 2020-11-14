import React from 'react'
import './Landing.css'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

export default function Landing() {
	return (
		<>
			<section id="header">
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
			</section>
		    <section id="desc">
			</section>
		    <section id="intro">
				<img id="introimg" src={window.location.origin + '/assets/interview.svg'} />
				<div id="intromessage"> 
					<p id="charge">Get that job you've <br/> always wanted.</p>
					<p id="explain"> Keep your portfolio up to date <br/> Share with recruiters</p>
					<Button variant="contained" color="secondary">Create an Account</Button>
				</div>
			</section>
			<footer>
				<img src={window.location.origin + '/assets/portfolio.svg'} />
				<p>  © 2020, <a href="https://thealamu.tech">Faithfulness Alamu</a>. All rights reserved. </p>
			</footer>
		</>
	)
}
