import React from 'react';

const Comment = props => {
    return (
        <div className='comment-info'>
            <span className='comment-user'>{props.comment.username}</span>
            <span className='comment-text'>{props.comment.text}</span>
        </div>
    )
}

export default Comment;
