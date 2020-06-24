import React from "react";
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import IconImage from './../../IconImage/IconImage'
import moment from "moment";
import './Post.css'
import LocationIcon from '../../assets/location.svg'
import HoverDot from '../../assets/hoverDot.svg'
import Like from '../../assets/heart.svg'
import Comment from '../../assets/comment.svg'
import Ellipsis from '../../assets/ellipsis.svg'

const post = (props) => {
  return (
    <Card className='post'>
      <Card.Title>
        <IconImage  />
        <div className='textBox'>
          <Card.Text>Zach Studer</Card.Text>
          <Card.Text className='location'>
            <Image src={LocationIcon}/>
            OH, USA
          </Card.Text>
          <Card.Text className='relativeTime'>{moment(props.post.postDateTime).fromNow()}</Card.Text>
        </div>
        <Image src={Ellipsis} className='ellipsis'/>
      </Card.Title>
      <Card.Body>
        {props.post.postText}
        <Card.Text className='likesComments'>
          <span>{props.post.likes} Likes</span>
          <Image src={HoverDot} />
          <span>{props.post.comments.length} Comments</span>
        </Card.Text>
      </Card.Body>
      <Card.Footer >
        <ButtonGroup className='likesCommentsButtons'>
          <Button variant='outline-secondary' onClick={() => props.likePost(props.postIndex)}>
            <Image src={Like} className='likeIcon' />
            Like
          </Button>
          <Button variant='outline-secondary'>
            <Image src={Comment} className='commentIcon' />
            Comment
          </Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  )
};

export default post;