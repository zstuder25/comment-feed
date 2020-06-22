import React from "react";
import ProfilePic from './../profilePicture.jpg'
import {Image} from "react-bootstrap";

const imageIcon = () => {
  return (
    <Image src={ProfilePic} style={style} />
  )
};

const style = {
  borderRadius: '50%',
  border: '1px solid #ddd',
  maxWidth: '10%',
  maxHeight: '10%',
  margin: '2% 2% 10%'
};

export default imageIcon;