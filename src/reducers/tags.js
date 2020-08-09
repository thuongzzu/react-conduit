const initialState = {
    list: [],
    error: null,
    isLoading:false
}

const TagReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADING_TAG':{
         return { 
             ...state, 
            isLoading: true, 
            error: null };
            };

        case 'FETCH_LIST_TAGS':
            const newList =action.payload
            return {
                ...state,
                list: newList,
                isLoading: false 
            };

        case 'TAG_ERROR': {
                return { ...state, 
                    isLoading: false, 
                    error: action.payload    
                };
                    };

        default:
            return state
    }
}

        


export default TagReducer 