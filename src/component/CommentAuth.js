import React, { useState } from 'react';
import callAPI from '../ultils/apiCaller'
const CommentAuth = (props) => {
    const  {slug} = props;
    const  [content, setContent] = useState({
        content: ''
    })
    
   const handleChange = (event) => {
        event.preventDefault();
        setContent({
            [event.target.name]: event.target.value
        })
        console.log(content)
    }


   const postComment = (event) =>{
        event.preventDefault();
        callAPI('articles/'+slug +'/comments', 'POST', content)
  }

    return (
            <div className="col-xs-12 col-md-8 offset-md-2">
                <div><list-errors />
                    <form className="card comment-form"><grammarly-extension style={{ position: 'absolute', top: '-1px', left: '-1px', pointerEvents: 'none' }} className="_1KJtL">
                        <div data-grammarly-part="highlights" className="u_fNK" style={{ position: 'absolute', top: '0px', left: '0px' }}>
                            <div style={{ boxSizing: 'content-box', top: '1px', left: '1px', width: '728px', height: '100px', position: 'relative', pointerEvents: 'none', overflow: 'hidden', border: '0px', borderRadius: '0px', padding: '0px', margin: '0px' }}>
                                <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
                                    <div style={{ height: '828px', width: '2094px' }} />
                                </div>
                            </div>
                        </div>
                        <div data-grammarly-part="button" className="u_fNK" style={{ position: 'absolute', top: '0px', left: '0px' }}>
                            <div style={{ boxSizing: 'content-box', top: '1px', left: '1px', width: '728px', height: '100px', position: 'relative', pointerEvents: 'none', overflow: 'hidden', border: '0px', borderRadius: '0px', padding: '0px', margin: '0px' }}>
                                <div style={{ position: 'absolute', transform: 'translate(-100%, -100%)', top: '80px', left: '708px', width: 'auto', height: 'auto', pointerEvents: 'all' }}>
                                    <div style={{ flexDirection: 'row', display: 'flex', pointerEvents: 'auto' }}>
                                        <div style={{ position: 'relative' }} />
                                        <div data-grammarly-part="gbutton">
                                            <div className="_5WizN _1QzSN">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div></grammarly-extension>
                        <div className="card-block">
                            <textarea 
                            className="form-control" 
                            placeholder="Write a comment..." 
                            rows={3} 
                            name = "content"
                            spellCheck="false" 
                            value = {content.content}
                            onChange={ handleChange }/>
                        </div>

                        <div className="card-footer">
                                <img className="comment-author-img" alt ="" />
                            <button className="btn btn-sm btn-primary" type="submit" onClick = {postComment}>Post Comment
                            </button>
                        </div>
                    </form>
                </div>
                <div />
            </div>
    );
}

export default CommentAuth;