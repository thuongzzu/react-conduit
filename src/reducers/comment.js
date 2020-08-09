import { LOADING_COMMENT, FETCH_COMMENT, COMMENT_ERROR } from "../constant/ActionTypes";

const initialState = {
    commentList: [],
    error: null,
    isLoading:false
}

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING_COMMENT:{
         return { 
             ...state, 
            isLoading: true, 
        };
            };

        case FETCH_COMMENT:
            const newList = action.payload
            return {
                ...state,
                commentList: newList,
                isLoading: false 
            };

        case COMMENT_ERROR: {
                return { ...state, 
                    isLoading: false, 
                    error: action.payload    
                };
                    };

        default:
            return state
    }
}

export default commentReducer

