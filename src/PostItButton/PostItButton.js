import React from "react";
import {Button} from "react-bootstrap";

const postItButton = () => {
  return (
    <Button variant='primary' style={style}>
      Post It
    </Button>
  )
};

const style = {
  display: 'inline block',
  float: 'right'
};

export default postItButton;