import { FETCH_LIST_ARTICLE, FETCH_ARTICLE_BY_TAG, PAGINATE_ARTICLE, OUTSIDE_CLICK_TAG } from "../constant/ActionTypes"

export const fetchListArticle = (posts) => {
    return {
        type: FETCH_LIST_ARTICLE,
        payload: posts
    }
}

export const fetchListArticleByTag = (tag) => {
    return {
        type: FETCH_ARTICLE_BY_TAG,
        payload: tag
    }
}


export const paginatedArticle = (newPage) => {
    return {
        type: PAGINATE_ARTICLE,
        payload : newPage
    }
}

export const outsideClickTag = () => {
    return {
        type : OUTSIDE_CLICK_TAG
    }
}

