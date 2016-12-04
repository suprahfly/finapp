import './App.css';
import { connect } from 'react-redux';
import React, { Component } from 'react';

import Header from '../Header';
import Home from '../Home';



const mapStateToProps = state => ({
	appName: state.appName
});

class App extends Component {
	render() {
		return (
			<div>
				<Header appName={this.props.appName} />
				<Home />
			</div>
		);
	}
}

export default connect(mapStateToProps, () => ({}))(App);