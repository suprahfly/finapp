import React, { Component } from 'react'
import { connect } from 'react-redux';

import Banner from '../Banner';
import MainView from '../MainView';

import agent from '../../agent';

const Promise = global.Promise;

const mapToStateProps = state => ({
	appName: state.appName
});

const mapDispatchToProps = dispatch => ({
	onLoad: payload => {
		dispatch({ type:'HOME_PAGE_LOADED', payload })
	}
});

class Home extends Component {
	componentWillMount() {
		this.props.onLoad(agent.Articles.all())
	}

	render() {
		return (
			<div className="home-page">
				<Banner appName={this.props.appName} />

				<div className="container page">
					<div className="row">	
						<MainView />
						<div className="con-md-3">
							<div className="sidebar">
								<p>Popular tags</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default connect(mapToStateProps, mapDispatchToProps)(Home);