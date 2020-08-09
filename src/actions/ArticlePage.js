import { FETCH_COMMENT, LOADING_COMMENT, COMMENT_ERROR, FETCH_ARTICLE_PAGE, LOADING_ARTICLE_PAGE, ARTICLE_PAGE_ERROR } from "../constant/ActionTypes";


export const fetchArticlePageSuccess = (article) => {
    return {
      type : FETCH_ARTICLE_PAGE,
      payload: article
    }
  }
  
  export const loadingArticlePage = (slug) => {
    return {
      type:LOADING_ARTICLE_PAGE,
      payload: slug
    }
  }
  
  export const articleError = (error) => {
    return {
      type: ARTICLE_PAGE_ERROR,
      payload: error,
    };
  };