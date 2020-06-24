import React from "react";
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import IconImage from './../../IconImage/IconImage'
import PostMetaInfo from './PostMetaInfo/PostMedaInfo'
import CommentList from './CommentList/CommentList'
import './Post.css'
import HoverDot from '../../assets/hoverDot.svg'
import Like from '../../assets/heartGray.svg'
import Comment from '../../assets/comment.svg'
import Ellipsis from '../../assets/ellipsis.svg'

const post = (props) => {
  return (
    <Card className='post'>
      <Card.Title>
        <IconImage  />
        <PostMetaInfo time={props.post.postDateTime} />
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
        {props.post.comments.length > 0  && <CommentList comments={props.post.comments}/> }
      </Card.Footer>
    </Card>
  )
};

export default post;