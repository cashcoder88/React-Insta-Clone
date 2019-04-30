
import React from 'react';

const Likes = props => {
    return (
        <div className='likes-main'>
            <div className='icon-wrap' onClick={props.incrementLikes}>
                {/* need heart icon here */}
                <p>Heart</p>
            </div>
            <div className="like-section-wrapper">
                {/* Need comment icon here */}
                <p>Comment</p>
            </div>
            <div className='likes-number'>
                <div>{props.likes}</div>
            </div>
        </div>
    )
}

export default Likes;