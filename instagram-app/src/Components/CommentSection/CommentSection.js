import React from 'react';
import Comment from './Comment';

function CommentSection(props) {
    return (
       <Comment comments={props.comments} />
    )
}



export default CommentSection;