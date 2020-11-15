import React from 'react'

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<>
				<h1>{this.props.match.params.uid}</h1>
			</>
		)
	}
}
	
