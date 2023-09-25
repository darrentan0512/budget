import { take, call, put} from "redux-saga/effects";
import types from '../actions/entries.actions'
import axios from "axios";

export function* getAllEntries() {
    yield take(types.GET_ENTRIES);
    console.log('I need to get the entries now');
    const result = yield call(axios, 'http://localhost:3002/entries')
    console.log(result);
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
}