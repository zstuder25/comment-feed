import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostingFeedContainer from "./PostingFeed/PostingFeedContainer";
import PostingBoxContainer from "./PostingBox/PostingBoxContainer";
import './App.css'


class App extends Component {

  render () {
    return (
      <div>
        <PostingBoxContainer />
        <PostingFeedContainer />
      </div>
    );
  }
}

export default App;
