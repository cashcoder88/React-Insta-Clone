import React from 'react';

function Comment(props) {
    return (
        <div className='comment-info'>
            <span className='comment-user'>{props.comments.username}</span>
            <span className='comment-text'>{props.comments.text}</span>

        </div>
    )
}

export default Comment;
