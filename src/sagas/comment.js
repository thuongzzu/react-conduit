import { takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { LOADING_COMMENT } from "../constant/ActionTypes";
import { fetchListComments, commentError } from "../actions/comment";
import { fetchComment } from "../ultils/utilsAPI";

function* commentHandling(payload) {
  try {
    const slug = payload.payload
    const commentsList = yield call(fetchComment, slug);
    console.log(commentsList)
    yield put(fetchListComments(commentsList));
  } catch (err) {
    yield put(commentError(err.toString()));
  }
}

export default function* commentSaga() {
  yield takeLatest(LOADING_COMMENT, commentHandling);
}