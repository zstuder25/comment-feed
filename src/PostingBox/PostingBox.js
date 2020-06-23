import React, {useState} from "react";
import IconImage from './../IconImage/IconImage';
import PhotoVidButton from './../PhotoVidButton/PhotoVidButton';
import {Button, Card, Form} from "react-bootstrap";

const postingBox = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [postText, setPostText] = useState('');

  return(
    <Card style={cardStyle}>
      <Card.Body >
        <Form>
          <Form.Group>
            <IconImage />
            <Form.Control
              as='textarea' rows='3' placeholder={'What is on your mind?'} style={inputStyle}
              value={postText} onInput={e => setPostText(e.target.value)}
            />
          </Form.Group>
          <PhotoVidButton />
          <Button
            variant='primary' style={postItButtonStyle} disabled={postText === ''}
            onClick={() => {
              props.submitPost(postText);
              setPostText('');
            }}
          >
            Post It
          </Button>
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

const postItButtonStyle = {
  display: 'inline block',
  float: 'right'
};

export default postingBox;