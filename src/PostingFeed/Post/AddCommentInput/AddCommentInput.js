import React from "react";
import {Form} from "react-bootstrap";
import IconImage from './../../../IconImage/IconImage'
import './AddCommentInput.css'

const addCommentInput = () => {
  return (
    <div >
      <IconImage/>
      <Form.Control className='addCommentBox' type='text' placeholder='Add a Comment'/>
    </div>
  )
};

export default addCommentInput;