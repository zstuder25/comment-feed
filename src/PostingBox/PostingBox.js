import React from "react";
import IconImage from './../IconImage/IconImage';
import PhotoVidButton from './../PhotoVidButton/PhotoVidButton';
import PostItButton from '../PostItButton/PostItButton';
import {Card, Form } from "react-bootstrap";

const postingBox = () => {
  return(
    <Card style={cardStyle}>
      <Card.Body >
        <Form>
          <Form.Group>
            <IconImage />
            <Form.Control as='textarea' rows='3' placeholder={'What is on your mind?'} style={inputStyle}/>
          </Form.Group>
          <PhotoVidButton />
          <PostItButton />
        </Form>
      </Card.Body>
    </Card>
  );
};

const cardStyle = {
  width: "50%",
  margin: "2% 25%",
  borderRadius: '5vh'
};

const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #ced4da',
  display: 'inline',
  width: '75%',
  marginTop: '2%',
  resize: 'none'
};

export default postingBox;