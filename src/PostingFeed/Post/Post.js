import React, {useState} from "react";
import {Button, ButtonGroup, Card, Image} from "react-bootstrap";
import IconImage from './../../IconImage/IconImage'
import PostMetaInfo from './PostMetaInfo/PostMedaInfo'
import CommentList from './CommentList/CommentList'
import AddCommentInput from './AddCommentInput/AddCommentInput'
import './Post.css'
import HoverDot from '../../assets/hoverDot.svg'
import Like from '../../assets/heartGray.svg'
import Comment from '../../assets/comment.svg'
import Ellipsis from '../../assets/ellipsis.svg'

const post = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [addComment, setAddComment] = useState(false);

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
            <Image src={Like} />
            Like
          </Button>
          <Button variant='outline-secondary' onClick={() => setAddComment(!addComment)}>
            <Image src={Comment} />
            Comment
          </Button>
        </ButtonGroup>
        {addComment && <AddCommentInput addComment={props.addComment} />}
        {props.post.comments.length > 0  && <CommentList comments={props.post.comments} postIndex={props.postIndex}/> }
      </Card.Footer>
    </Card>
  )
};

export default post;