// Garbage data to make graph appear

import {createReducer} from "@reduxjs/toolkit";

const initialState = {
  posts: [
    {
      postText: 'First!',
      postDateTime: new Date(new Date().getTime() - (5*60000)), // Five minutes ago
      likes: 1,
      comments: [
        {
          commentText: 'woah, so cool',
          likes: 1,
          commentDateTime: new Date(new Date().getTime() - (3*60000)) // Three minutes ago
        },
        {
          commentText: 'this is the next comment',
          likes: 0,
          commentDateTime: new Date()
        }
      ]
    },
    {
      postText: 'Second is best!',
      postDateTime: new Date(),
      likes: 2,
      comments: []
    }
  ],
};

const createPost = (postText) => {
  return {
    postText: postText,
    postDateTime: new Date(),
    likes: 0,
    comments: []
  }
};


const createComment = (commentText) => {
  return {
    commentText: commentText,
    likes: 0,
    commentDateTime: new Date()
  }
};


export default createReducer(initialState, {
  ['MAKE_POST']: (state, action) => {
    state.posts.push(createPost(action.post))
  },
  ['LIKE_POST']: (state, action) => {
    state.posts.sort((a, b) => b.postDateTime - a.postDateTime);
    state.posts[action.postIndex].likes ++
  },
  ['LIKE_COMMENT']: (state, action) => {
    state.posts.sort((a, b) => b.postDateTime - a.postDateTime);
    state.posts[action.postIndex].comments[action.commentIndex].likes ++
  },
  ['ADD_COMMENT']: (state, action) => {
    state.posts.sort((a, b) => b.postDateTime - a.postDateTime);
    state.posts[action.postIndex].comments.push(createComment(action.comment))
  },
  ['EDIT_COMMENT']: (state, action) => {
    state.posts.sort((a, b) => b.postDateTime - a.postDateTime);
    state.posts[action.postIndex].comments[action.commentIndex].commentText = action.commentText
  },
  ['DELETE_COMMENT']: (state, action) => {
    state.posts.sort((a, b) => b.postDateTime - a.postDateTime);
    const index = action.commentIndex;
    state.posts[action.postIndex].comments.splice(index, index+1)
  }
})
