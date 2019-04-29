import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';
import PostContainer from './Components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <PostContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
