import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';
// import SearchBar from './Components/SearchBar/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        {/* <SearchBar /> */}
        <PostContainer posts={this.state.posts.map(postObject => (postObject) )} />
      </div>
    );
  }
}

export default App;
