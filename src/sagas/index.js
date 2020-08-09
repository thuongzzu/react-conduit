import { take,call,fork, all} from 'redux-saga/effects';
import tagSaga from './tags'
import loginSaga from "./login";
import commentSaga from "./comment"
import articlePageSaga from './ArticlePage'
export default function* (){
    yield all([fork(tagSaga),fork(loginSaga),fork(commentSaga),fork(articlePageSaga)])
}