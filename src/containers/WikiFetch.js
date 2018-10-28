import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../store/actions/data_fetch_action';
import Facts from '../components/Facts';
import Header from '../components/Header';

class WikiFetch extends Component {
	constructor(props) {
		super(props)
		this.state = {
			day: new Date().getDate(),
			month: new Date().getMonth() + 1, //Months are counted from 0 so we have to add 1
		}
	}
	
	componentDidMount() {
		this.props.dispatch(fetchData('https://en.wikipedia.org/api/rest_v1/feed/onthisday/events/' + this.state.month + '/' + this.state.day, 5000))
	}

	componentDidUpdate() {
		if(this.props.dataError === true) {
			throw new Error("Could not fetch data");
		}
	}
	render() {
		console.log(this.props)
		return (
			<div>
			{this.props.loading ? (
				<div className="loading"></div>
			) : (
				<Fragment>
					<Header>On this day for: {this.state.day}/{this.state.month}</Header>
					<Facts data={this.props.data} />
				</Fragment>
			)}
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loading: state.dataStore.loading,
	data: state.dataStore.content,
	dataError: state.dataStore.dataerror,
});

export default connect(mapStateToProps)(WikiFetch);