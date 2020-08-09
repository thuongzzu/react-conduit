import { FETCH_COMMENT, LOADING_COMMENT, COMMENT_ERROR } from "../constant/ActionTypes";


export const fetchListComments = (comments) => {
    return {
      type : FETCH_COMMENT,
      payload: comments
    }
  }
  
  export const loadingComment = (slug) => {
    return {
      type:LOADING_COMMENT,
      payload: slug
    }
  }
  
  export const commentError = (error) => {
    return {
      type: COMMENT_ERROR,
      payload: error,
    };
  };
  