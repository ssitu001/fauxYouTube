import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import { handleSearch } from '../Actions/search';

function* fetchVideos(action) {
  try {
    const vids = yield call(handleSearch, action.payload.query);
    console.log('vids', vids)
    yield put({type: "VID_FETCH_SUCCEEDED", vids});
    yield put({type: "VID_FETCH_SUCCEEDED_CURRENT", vid: vids[0]});
  } catch (e) {
    yield put({type: "VID_FETCH_FAILED", message: e});
    yield put({type: "VID_FETCH_FAILED_CURRENT", message: e});

  }
}

function* mySaga() {
  yield takeLatest("VID_FETCH_REQUESTED", fetchVideos);
}

export default mySaga;