import React from "react";
import Post from './Post/Post'

const postingFeed = (props) => {
  const posts = props.allPosts.map( post =>
    <Post postText={post.postText} />
  );

  return (
    <div>
      {posts}
    </div>
  )
};

export default postingFeed;