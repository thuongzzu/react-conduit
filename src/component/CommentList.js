
import React from 'react';


const CommentList = (props) => {
    const { comments } = props;
    
    return (
        
        <div className = "col-xs-12 col-md-8 offset-md-2">
        <div>
            <div className="card">
                <div className="card-block">
                    <p className="card-text">{comments.body}</p>
                </div>
                <div className="card-footer">
                    <a className="comment-author" href="#@">
                        <img height = '10px' src={comments.author.image} className="comment-author-img" alt ="" />
                    </a>{/* react-text: 496 */}&nbsp;{/* /react-text */}
                    <a className="comment-author" href="#@">{comments.author.username}</a>
                    <span className="date-posted">{comments.createdAt}</span>{/* react-empty: 499 */}
                </div>
            </div>
        </div>
        </div>
       
    );
};

export default CommentList;