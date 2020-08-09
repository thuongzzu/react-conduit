import {call, put, takeEvery} from 'redux-saga/effects'
import { fetchListTags, tagError } from '../actions/Tags';
import {  LOADING_TAG } from '../constant/ActionTypes';
import { fetchTag } from '../ultils/utilsAPI';


function* tagHandling(){
    try {
        const tagList = yield call(fetchTag);
        console.log(tagList)
        yield put(fetchListTags(tagList));
      } catch (err) {
        yield put(tagError(err.toString()));
      }
}

export default function* tagSaga() {
    yield takeEvery(LOADING_TAG, tagHandling);
  }