import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Likes from './Likes';
import './PostContainer.css'

function Post(props) {
    return (
        <div className='post-container'>
            <PostHeader 
                username={props.post.username}
                thumbnailUrl={props.post.thumbnailUrl}
            />
            <div>
                <img 
                    alt="post main thumbnail"
                    className="post-image"
                    src={props.post.imageUrl}
                />
            </div>
            <Likes />
            <CommentSection comments={props.post.comments} />
        </div>
    );
};


export default Post;


