import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Likes from './Likes';
import './PostContainer.css'

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: props.post.likes
        }
    }

    incrementLike = () => {
        let likes = this.state.likes + 1;
        this.setState({
            likes
        })
    }
    render() {
        return (
            <div className='post-container'>
                <PostHeader 
                    username={this.props.post.username}
                    thumbnailUrl={this.props.post.thumbnailUrl}
                />
                <div>
                    <img 
                        alt="post main thumbnail"
                        className="post-image"
                        src={this.props.post.imageUrl}
                    />
                </div>
                <Likes incrementLikes={this.incrementLike} likes={this.state.likes}/>
                <CommentSection comments={this.props.post.comments} />
            </div>
        );
    }

};


export default Post;


