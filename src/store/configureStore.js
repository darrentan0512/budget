
import { combineReducers, createStore } from 'redux';
import entriesReducer from '../reducers/entries.reducer';

const configureStore = () => {
    return createStore(
        combinedReducers({
            entries: entriesReducer
        })
    )
};

export default configureStore;