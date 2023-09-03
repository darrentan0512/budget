
import { combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';

const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer
        })
    )
};

export default configureStore;