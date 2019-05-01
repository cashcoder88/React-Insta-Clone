import React, { Component } from 'react';
// import dummyData from './dummy-data';
import PostsPage from './Components/PostContainer/PostsPage';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    }
  }


  render() {
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}

export default App;
