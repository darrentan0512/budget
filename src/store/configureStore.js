
import { combineReducers, createStore } from 'redux';
import {  composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducer';

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer
        }),
        composeWithDevTools()
    )
};

export default configureStore;