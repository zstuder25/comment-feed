import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostingFeedContainer from "./PostingFeed/PostingFeedContainer";
import PostingBoxContainer from "./PostingBox/PostingBoxContainer";


class App extends Component {

  render () {
    const style = {
      height: '100%',
      width: '100%',
      position: 'absolute',
      backgroundColor: '#7288a3'
    };

    return (
      <div style={style}>
        <PostingBoxContainer />
        <PostingFeedContainer />
      </div>
    );
  }
}

export default App;
