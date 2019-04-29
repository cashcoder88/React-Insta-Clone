import React, { Component } from 'react';
import dummyData from './dummy-data';
import './App.css';

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
        Testing 123
      </div>
    );
  }
}

export default App;
