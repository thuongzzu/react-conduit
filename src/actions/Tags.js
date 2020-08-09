import {FETCH_LIST_TAGS,TAG_ERROR, LOADING_TAG} from './../constant/ActionTypes'

export const fetchListTags = (tags) => {
    return{
        type : FETCH_LIST_TAGS,
        payload : tags
    }
}

export const loadingTag = () =>{
  return {
    type: LOADING_TAG,
  }
}

export const tagError = (error) => {
    return {
      type: TAG_ERROR,
      payload: error,
    };
  };

