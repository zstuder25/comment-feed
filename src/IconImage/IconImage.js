import React from "react";
import ProfilePic from '../assets/profilePicture.jpg'
import {Image} from "react-bootstrap";

const imageIcon = () => {
  return (
    <Image src={ProfilePic} style={style} roundedCircle/>
  )
};

const style = {
  border: '1px solid #ddd',
  maxWidth: '7%',
  maxHeight: '7%',
  margin: '2%',
  float: 'left'
};

export default imageIcon;