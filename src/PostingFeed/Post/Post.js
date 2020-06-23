import React from "react";
import {Card} from "react-bootstrap";
import IconImage from './../../IconImage/IconImage'

const post = (props) => {
  return (
    <Card style={cardStyle}>
      <Card.Body>
        <IconImage  />
        {props.postText}
      </Card.Body>
    </Card>
  )
};

const cardStyle = {
  width: "50%",
  margin: "1% 25%",
  borderRadius: '2vh'
};

export default post;