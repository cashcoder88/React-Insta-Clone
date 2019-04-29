import React from 'react';

function Comment(props) {
    return (
        <div className='comment-info'>
            <span className='comment-text'>{props.comments.text}</span>
            <span className='comment-user'>{props.comments.username}</span>
        </div>
    )
}

export default Comment;
