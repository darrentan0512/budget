
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];


const configureStore = () => {
    return createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools(
            applyMiddleware(...middleWares)
        )
    )
};

export default configureStore;