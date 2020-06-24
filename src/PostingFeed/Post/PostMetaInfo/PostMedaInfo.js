import React from "react";
import {Card, Image} from "react-bootstrap";
import LocationIcon from "../../../assets/location.svg";
import moment from "moment";

const postMetaInfo = (props) => {
  return (
    <div className='textBox'>
      <Card.Text>Zach Studer</Card.Text>
      <Card.Text className='location'>
        <Image src={LocationIcon}/>
        OH, USA
      </Card.Text>
      <Card.Text className='relativeTime'>{moment(props.time).fromNow()}</Card.Text>
    </div>
  )
};

export default postMetaInfo;