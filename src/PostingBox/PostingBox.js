import React, {useState} from "react";
import IconImage from './../IconImage/IconImage';
import PhotoVidButton from './../PhotoVidButton/PhotoVidButton';
import {Button, Card, Form} from "react-bootstrap";
import './PostingBox.css'

const postingBox = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [postText, setPostText] = useState('');

  return(
    <Card className='cardStyle'>
      <Card.Body >
        <Form>
          <Form.Group>
            <IconImage />
            <Form.Control
              as='textarea' rows='3' placeholder={'What is on your mind?'} className='inputStyle'
              value={postText} onInput={e => setPostText(e.target.value)}
            />
          </Form.Group>
          <PhotoVidButton />
          <Button
            variant='primary' className='postItButtonStyle' disabled={postText === ''}
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

export default postingBox;