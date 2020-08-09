import { combineReducers} from 'redux';
import ArticleReducer from './Article'
import TagReducer from './tags';
import ArticleList from './ArticleList'
import loginReducer from './login';
import commentReducer from './comment';
import articlePageReducer from './ArticlePage';

 const rootReducer = combineReducers({
    articles : ArticleReducer,
    tags : TagReducer,
    articleList: ArticleList,
    login : loginReducer,
    comment : commentReducer,
    articlePage: articlePageReducer
})

export default rootReducer;