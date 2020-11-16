import React from 'react'

export default class Portfolio extends React.Component {
	render() {
		return (
			<>
				<h1>{this.props.match.params.uid}</h1>
			</>
		)
	}
}
	
