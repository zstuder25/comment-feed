import React from "react";
import ProfilePic from '../assets/profilePicture.jpg'
import {Image} from "react-bootstrap";
import './IconImage.css'

const imageIcon = () => {
  return (
    <Image className='profileImage' src={ProfilePic} roundedCircle/>
  )
};

export default imageIcon;