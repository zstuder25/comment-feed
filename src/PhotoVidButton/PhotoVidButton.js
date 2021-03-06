import React from "react";
import {Button} from "react-bootstrap";

const photoVidButton = () => {
  return (
    <Button variant='dark' style={style} >
      Photo/Video
    </Button>
  )
};

const style = {
  display: 'inline-block',
  float: 'left',
  borderRadius: '3vh'
};

export default photoVidButton;