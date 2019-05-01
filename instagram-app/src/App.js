import React, { Component } from 'react';
// import dummyData from './dummy-data';
import withAuthenticate from './Components/Authentication/withAuthenticate';
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

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage);

export default App;
