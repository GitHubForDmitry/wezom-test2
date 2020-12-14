import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import * as reducers from './export-reducers.js';
import { reducer as formReducer } from 'redux-form';

const createRootReducer = (history) => combineReducers({
	router: connectRouter(history),
	...reducers,
	formReducer
});

export { createRootReducer };
