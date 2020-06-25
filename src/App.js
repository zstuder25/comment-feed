import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostingFeedContainer from "./PostingFeed/PostingFeedContainer";
import PostingBoxContainer from "./PostingBox/PostingBoxContainer";
import './App.css'


const app = () => {
    return (
      <>
        <PostingBoxContainer />
        <PostingFeedContainer />
      </>
    );
};

export default app;
