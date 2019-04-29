import React from 'react';
import Post from './Post';

function PostContainer(props) {
    return (
        <div>
            {props.posts.map((post, i) => <Post key={i} post={post} /> )}
        </div>
    )
}


export default PostContainer;