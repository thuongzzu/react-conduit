import React from 'react'
import {Row , Col} from 'reactstrap'

const Comment = () => {

    return (
        <div>
            <Row>
            <Col className = 'col-xs-12 col-md-8 offset-md-2'>
            <div className="article-actions" />
                    <p>
                        <a className href="/Sign-in">Sign in </a>
                         or 
                        <a className href="/Sign-up"> Sign up </a>
                        to add the comments on this article
                    </p>
                    <div>
                        <div className="card">
                            <div className="card-block">
                                <p className="card-text">And the comment</p>
                            </div>
                            <div className="card-footer">
                                <a className="comment-author" href="#@mamunonweb">
                                    <img src="https://www.facebook.com/favicon.ico" alt="" className="comment-author-img" />
                                </a>
                                
                            </div>
                        </div>
                    </div>
            </Col>
            </Row>
           </div>
    );
}

export default Comment;