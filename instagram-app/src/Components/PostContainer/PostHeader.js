import React from 'react';
import './PostContainer.css';

const PostHeader = (props) => {
    return (
        <div>
            <div>
                <img 
                    alt='post header thumbnail'
                    className="post-thumb"
                    src={props.thumbnailUrl}
                />
            </div>
            <div>{props.username}</div>
        </div>
    );
};





export default PostHeader;

// import React from 'react';
// import './Posts.css';

// const PostHeader = props => {
//   return (
//     <div className="post-header">
//       <div className="post-thumb-wrapper">
//         <img
//           alt="post header"
//           className="post-thumb"
//           src={props.thumbnailUrl}
//         />
//       </div>
//       <div>{props.username}</div>
//     </div>
//   );
// };

// export default PostHeader;