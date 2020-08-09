import React, { useState, useEffect } from 'react';
import Comment from './Comment'
import CommentAuth from './CommentAuth'
import CommentList from './CommentList';
import { useSelector, useDispatch } from 'react-redux';
import { loadingComment } from '../actions/comment';
import { loadingArticlePage } from '../actions/ArticlePage';


const ArticleDetail = (props) => {
    const { match } = props;
    const sSlug = match.params.slug;
    
    const commentList = useSelector(state => state.comment.commentList);
    const dispatch = useDispatch();
    const article = useSelector(state => state.articlePage.article);
    

    
    useEffect(() => {
         dispatch(loadingArticlePage(sSlug))
    },[dispatch])
    
    useEffect(()=>{
        dispatch(loadingComment(sSlug))
    },[dispatch])   
    
    const loginedIn = localStorage.getItem('jwt');

    if (loginedIn !== null) {
        return (
            <div>
                    <div>
                        <div className="article-page">
                            <div className="banner">
                                <div className="container">
                                    <h1>{article.title}</h1>
                                    <div className="article-meta">
                                        <a className href >
                                            <img src={article.author && article.author.image ? article.author.image: ""}  alt ="" /></a>
                                        <div className="info">
                                                 <a className="author" href >{article.author && article.author.username ? article.author.username: ""}</a>
                                            <span className="date">{article.createdAt}</span>
                                        </div>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        

                        <div className="container-page">
                            <div classname ="row article-content">
                                <div className="col-xs-12 col-md-8 offset-md-2">
                                   <a>{article.body}</a>
                                    <ul className="tag-list" />
                                    <hr />
                                </div>
                            </div>
                        
                                
                        </div>
                    </div>
                        <CommentAuth slug ={ sSlug } />
                    </div>
                
            {commentList.map(comment => { 
                return(
                <CommentList comments = {comment} />
            )})}
            </div>
        )
    } else {
        return (
            <div>
                    <div>
                        <div className="article-page">
                            <div className="banner">
                                <div className="container">
                                    <h1>This is great</h1>
                                    <div className="article-meta">
                                        
                                        <a className href>
                                            <img src={article.author && article.author.image ? article.author.image: ""} alt="" /></a>
                                        <div className="info">
                                            <a className="author" href></a>
                                            <span className="date">{article.createdAt}</span>
                                        </div>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container page">
                            <div className="row article-content">
                                <div className="col-xs-12">
                                    <div>
                                        <h2>{article.body}</h2>
                                    </div>
                                    <ul className="tag-list" />
                                </div>
                            </div>
                            <hr />
                            <Comment />
                        </div>
                    </div>
              
            </div>

        );
    }
}

export default ArticleDetail