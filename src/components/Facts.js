import React, { Component, Fragment } from 'react';
import { shuffle } from '../helpers';

export default class Facts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: shuffle(this.props.data).slice(0,5),
		}
	}

	shuffleData = () => {
		this.setState({data: shuffle(this.props.data).slice(0,5)})
	}

	render() {
		return (
			<div className="content">
				<button 
					onClick={this.shuffleData}
					className="shuffle-button"
				>
					<span>
						Show me some new facts
					</span>
				</button>
			{this.state.data.map((item, i) =>
				<div 
					key={i}
					className="item"
				>
					<strong>{item.year}: </strong>
					{item.text}
				</div>
			)}
		</div>
		)
	}
}