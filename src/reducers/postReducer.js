// Garbage data to make graph appear
const INITIAL_STATE = {
  posts: [
    {
      postText: 'First!',
      postDateTime: new Date(new Date().getTime() - (5*60000)), // Five minutes ago
      likes: 1,
      comments: [
        {
          //TODO comments
        }
      ]
    },
    {
      postText: 'Second is best!',
      postDateTime: new Date(),
      likes: 1,
      comments: [
        {
          //TODO comments
        }
      ]
    }
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'MAKE_POST':
      return { ...state, posts: state.posts.push(action.type) };
    case 'ADD_COMMENT' :
      //TODO for adding comments
      return state;
    case 'ADD_LIKE_TO_POST':
      //TODO
      return state;
    case 'ADD_LIKE_TO_COMMENT':
      //TODO
      return state;
    default:
      return state;
  }
};
