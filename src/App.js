import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostingBox from './PostingBox/PostingBox'
import PostingFeedContainer from "./PostingFeed/PostingFeedContainer";


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
        <PostingBox />
        <PostingFeedContainer />
      </div>
    );
  }
}

export default App;
