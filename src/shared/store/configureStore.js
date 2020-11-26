import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/combineReducers'

const devExtension = window.devToolsExtension ? window.devToolsExtension() : f => f

export default () => {
	const store = createStore(rootReducer, {}, compose(applyMiddleware(thunk), devExtension));
	return store;
};