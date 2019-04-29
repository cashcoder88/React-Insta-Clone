import React from 'react';
import CommentSection from '../CommentSection/CommentSection';

function PostContainer(props) {
    return (
        <div>
            {props.posts.map((comment, i) => <CommentSection key={i} comments={comment} /> )}
        </div>
    )
}


export default PostContainer;