import React from "react";
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import moment from "moment";
import './Comment.css'
import Like from './../../../../assets/heart.svg'
import Edit from './../../../../assets/edit.svg'
import Delete from './../../../../assets/delete.svg'

const comment = (props) => {
  return (
    <Card className='commentCard'>
      <Card.Title className='innerCard'>
        <div className='metaInfo'>
          <Card.Text>Zach Studer</Card.Text>
          <Card.Text style={{color: 'blue'}}>Software Developer</Card.Text>
        </div>
        <Card.Text className='timeStamp'>{moment(props.comment.commentDateTime).fromNow()}</Card.Text>
      </Card.Title>
      <Card.Text className='innerCard commentText'>{props.comment.commentText}</Card.Text>
      <ButtonGroup className='commentOptions'>
        <Button variant='outline-secondary' disabled >{props.comment.likes} Likes</Button> |
        <Button variant='outline-secondary' ><Image src={Like}/> Like</Button> |
        <Button variant='outline-secondary' ><Image src={Edit}/> Edit</Button> |
        <Button variant='outline-secondary' ><Image src={Delete}/> Delete</Button>
      </ButtonGroup>
    </Card>
  )
};

export default comment;