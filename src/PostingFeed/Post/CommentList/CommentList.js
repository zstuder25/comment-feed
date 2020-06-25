import React from "react";
import IconImage from './../../../IconImage/IconImage'
import CommentContainer from "./Comment/CommentContainer";

const commentList = (props) => {
  const comments = props.comments.map( (comment, index) =>
    <div>
      <IconImage/>
      <CommentContainer postIndex={props.postIndex} comment={comment} commentIndex={index}/>
    </div>
  );

  return (
    <>
      {comments}
    </>
  )
};


export default commentList;