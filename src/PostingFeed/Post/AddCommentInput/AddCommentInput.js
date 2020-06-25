import React, {useState} from "react";
import {Form} from "react-bootstrap";
import IconImage from './../../../IconImage/IconImage'
import './AddCommentInput.css'

const addCommentInput = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [commentText, setCommentText] = useState('');

  return (
    <div >
      <IconImage/>
      <Form.Control className='addCommentBox' type='text' placeholder='Add a Comment'
        value={commentText}
        onInput={e => {
          if(e.keyCode !== 13) {
            setCommentText(e.target.value)
          }
        }}
        onKeyDown={ e => {
          if(e.keyCode === 13){
            props.addComment(commentText)
            setCommentText('');
          }
        }}
      />
    </div>
  )
};

export default addCommentInput;