import App from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { promiseMiddleware } from './middleware';

const defaultState = {
	appName: 'budg',
	user: null
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'HOME_PAGE_LOADED':
		console.debug(action);
			return {...state, articles: action.payload.articles}
	}
	return state;
};

const store = createStore(reducer, applyMiddleware(promiseMiddleware));


ReactDOM.render((
	<Provider store={ store }>
		<App />
	</Provider>
), document.getElementById('root'));

export default App;
