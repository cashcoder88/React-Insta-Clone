import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
      <CommentSection comments={props.posts.comments.map(commentObject => (commentObject))} />
    )
}


export default PostContainer;