import { LOADING_ARTICLE_PAGE, FETCH_ARTICLE_PAGE, ARTICLE_PAGE_ERROR } from "../constant/ActionTypes";

const initialState = {
    article:{},
    error: null,
    isLoading:false
}

const articlePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_ARTICLE_PAGE:{
         return { 
             ...state, 
            isLoading: true, 
        };
            };

        case FETCH_ARTICLE_PAGE:
            const newArticle = action.payload
            return {
                ...state,
                article: newArticle,
                isLoading: false 
            };

        case ARTICLE_PAGE_ERROR: {
                return { ...state, 
                    isLoading: false, 
                    error: action.payload    
                };
                    };

        default:
            return state
    }
}

export default articlePageReducer