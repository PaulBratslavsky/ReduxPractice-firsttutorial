import React, { Component } from 'react';
import BookList from '../containers/BookList';
import VideoList from '../containers/VideoList';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello</h1>
          <BookList />
          <VideoList /> 
      </div>
    );
  }
}


export default App;


