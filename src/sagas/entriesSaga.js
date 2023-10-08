import { take, call, put, fork} from "redux-saga/effects";
import types from '../actions/entries.actions'
import axios from "axios";

export function* getAllEntries() {
    yield take(types.GET_ENTRIES);
    console.log('I need to get the entries now');
    const result = yield call(axios, 'http://localhost:3002/entries')
    console.log(result);
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}

function* getEntryDetails(id){
    const { data } = yield call(axios, `http://localhost:3002/values/${id}`); 
    console.log(data);
}

export function* getAllEntriesDetails() {
    const { payload } = yield take(types.POPULATE_ENTRIES);
    for (let index = 0; index < payload.length; index++) {
        const entry = payload[index];
        yield fork(getEntryDetails, entry.id);
    }
}