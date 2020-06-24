import React from "react";
import Comment from './Comment/Comment'
import IconImage from './../../../IconImage/IconImage'

const commentList = (props) => {
  const comments = props.comments.map( (comment) =>
    <div>
      <IconImage/>
      <Comment comment={comment} />
    </div>
  );

  return (
    <>
      {comments}
    </>
  )
};


export default commentList;