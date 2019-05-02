import React, { Component } from 'react';
import dummyData from '../../dummy-data';
import './PostContainer.css'
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    }
  }

  componentDidMount() {
    this.setState({ posts: dummyData });
  }

  searchPosts = e => {
    const posts = this.state.posts.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({filteredPosts: posts });
  }


  render() {
    return (
      <div className="PostsPage">
        <SearchBar searchPosts={this.searchPosts}/>
        <PostContainer posts={
          this.state.filteredPosts.length > 0
          ? this.state.filteredPosts 
          : this.state.posts} />
      </div>
    );
  }
}

export default PostsPage;