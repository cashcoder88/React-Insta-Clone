import React from 'react';
import './PostContainer.css';

const PostHeader = (props) => {
    return (
        <div className='post-header-container'>
            <div className='ph-image'>
                <img 
                    alt='post header thumbnail'
                    className="post-thumb"
                    src={props.thumbnailUrl}
                />
            </div>
            <div className='ph-username'>{props.username}</div>
        </div>
    );
};





export default PostHeader;
