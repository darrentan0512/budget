
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import entriesReducer from '../reducers/entries.reducer';
import modalsReducer from '../reducers/modals.reducer';
import createSagaMiddleware from 'redux-saga';
import { testSaga } from '../sagas/testSaga';

const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];


const configureStore = () => {
    const store =  createStore(
        combineReducers({
            entries: entriesReducer,
            modals: modalsReducer,
        }),
        composeWithDevTools(
            applyMiddleware(...middleWares)
        )
    );
    sagaMiddleware.run(testSaga);
    return store;
};

export default configureStore;