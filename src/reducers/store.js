import { createStore, applyMiddleware } from "redux";
import linksListReducer from './linksListReducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(linksListReducer, applyMiddleware(thunkMiddleware));

export default store;