const initialState = {
    list: [],
    filters: {
        page: 1,
        limit: 10,
        offset: 1,
        tag: "",
        isCompleted: false
    }
};
const ArticleReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_LIST_ARTICLE': {
            const newList = [...action.payload]
            return {
                ...state,
                list: newList
            };
        }

        case 'FETCH_ARTICLE_BY_TAG': {
            const newTag = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters,
                    isCompleted: true,
                    tag: newTag
                }
            }
        }
        case 'PAGINATE_ARTICLE': {
            const newOffSet = (action.payload - 1) * 10 + 1;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    offset: newOffSet,
                    page: action.payload
                }
            }
        }

        case 'OUTSIDE_CLICK_TAG': {
            return {
                ...state,
                filters: {
                    ...state.filters,
                    tag: "",
                    isCompleted: false
                }
            }
        }
        default:
            return state;
    }
}
export default ArticleReducer