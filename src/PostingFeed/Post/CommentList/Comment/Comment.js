import React, {useState} from "react";
import {Button, ButtonGroup, Card, Form, Image} from "react-bootstrap";
import moment from "moment";
import './Comment.css'
import Like from './../../../../assets/heart.svg'
import Edit from './../../../../assets/edit.svg'
import Delete from './../../../../assets/delete.svg'

const comment = (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editComment, setEditComment] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [editCommentText, setEditCommentText] = useState(props.comment.commentText);

  return (
    <Card className='commentCard'>
      <Card.Title className='innerCard'>
        <div className='metaInfo'>
          <Card.Text>Zach Studer</Card.Text>
          <Card.Text style={{color: 'blue'}}>Software Developer</Card.Text>
        </div>
        <Card.Text className='timeStamp'>{moment(props.comment.commentDateTime).fromNow()}</Card.Text>
      </Card.Title>
      {
        <Card.Text className='innerCard commentText'>
          {!editComment ? props.comment.commentText :
            <Form.Control defaultValue={props.comment.commentText} type='text'
              onInput={e => {
                if(e.keyCode !== 13) {
                  setEditCommentText(e.target.value)
                }
              }}
              onKeyDown={ e => {
                if(e.keyCode === 13){
                  props.editComment(editCommentText);
                  setEditComment(false)
                }
              }}
            />
          }
        </Card.Text>
      }
      <ButtonGroup className='commentOptions'>
        <Button variant='outline-secondary' disabled >
          {props.comment.likes}
          <span className='text'> Likes</span>
        </Button>
        <span className='text'>|</span>
        <Button variant='outline-secondary' onClick={props.likeComment} >
          <Image src={Like}/>
          <span className='text'> Like</span>
        </Button>
        <span className='text'>|</span>
        <Button variant='outline-secondary' onClick={() => setEditComment(!editComment)} >
          <Image src={Edit}/>
          <span className='text'> Edit</span>
        </Button>
        <span className='text'>|</span>
        <Button variant='outline-secondary' onClick={props.deleteComment} >
          <Image src={Delete}/>
          <span className='text'> Delete</span>
        </Button>
      </ButtonGroup>
    </Card>
  )
};

export default comment;