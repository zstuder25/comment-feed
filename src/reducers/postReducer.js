// Garbage data to make graph appear

const initialState = {
  posts: [
    {
      postText: 'First!',
      postDateTime: new Date(new Date().getTime() - (5*60000)), // Five minutes ago
      likes: 1,
      comments: [
          //TODO comments
      ]
    },
    {
      postText: 'Second is best!',
      postDateTime: new Date(),
      likes: 2,
      comments: [
          //TODO comments
      ]
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

const incrementLikes = (state, postIndex) => {
  return state.posts.map((post, index) => {
    if (index !== postIndex) {
      return post
    }
    return {
      ...post,
      likes: post.likes + 1
    }
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MAKE_POST':
      return {...state, posts: state.posts.concat([createPost(action.post)])};
    case 'ADD_COMMENT' :
      //TODO for adding comments
      return state;
    case 'LIKE_POST':
      return {...state, posts: incrementLikes(state, action.postIndex)};
    case 'ADD_LIKE_TO_COMMENT':
      //TODO
      return state;
    default:
      return state;
  }
}
