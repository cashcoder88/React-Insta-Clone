import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
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

  // searchPosts = e => {
  //   const posts = this.state.posts.filter(post => {
  //     if (post.username.includes(e.target.value)) {
  //       return post;
  //     }
  //   });
  //   this.setState({ filteredPosts: posts });
  // };
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
      <div className="App">
        <SearchBar searchPosts={this.searchPosts}/>
        <PostContainer posts={
          this.state.filteredPosts.length > 0
          ? this.state.filteredPosts 
          : this.state.posts} />
      </div>
    );
  }
}

export default App;
