import React from 'react';
import Post from './Post';

function PostContainer(props) {
    return (
        <div className='postContainer-container'>
            {props.posts.map((post, i) => <Post key={i} post={post} /> )}
        </div>
    )
}


export default PostContainer;