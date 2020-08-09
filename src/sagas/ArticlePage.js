import { call, put, takeLatest, take, takeEvery } from "redux-saga/effects";
import {  LOADING_ARTICLE_PAGE } from "../constant/ActionTypes";
import { fetchArticlePage } from "../ultils/utilsAPI";
import { articleError, fetchArticlePageSuccess } from "../actions/ArticlePage";

function* articlePageHandling(payload) {
  try {
    console.log(payload)
    const slug = payload.payload
    const articleMeta = yield call(fetchArticlePage, slug);
    console.log(articleMeta)
    yield put(fetchArticlePageSuccess(articleMeta));
  } catch (err) {
    yield put(articleError(err.toString()));
  }
}

export default function* articlePageSaga() {
  yield takeLatest(LOADING_ARTICLE_PAGE, articlePageHandling);
}