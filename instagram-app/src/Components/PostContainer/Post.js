import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import Likes from './Likes';
import styled from 'styled-components';
import './PostContainer.css'


const PostContainerDiv = styled.div`
    display: flex;
    box-shadow: 5px 5px 6px grey;
    flex-direction: column;
    float: left;
    margin: 50px;
`;

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
            <PostContainerDiv>
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
            </PostContainerDiv>
        );
    }

};


export default Post;


