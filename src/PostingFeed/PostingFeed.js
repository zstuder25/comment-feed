import React from "react";
import PostContainer from "./Post/PostContainer";

const postingFeed = (props) => {
  const posts = props.allPosts.map( (post, index) =>
    <PostContainer postIndex={index} />
  );

  return (
    <div>
      {posts}
    </div>
  )
};

export default postingFeed;