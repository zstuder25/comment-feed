import {connect} from "react-redux";
import Post from './Post'
import {getPosts} from "../../selectors/postSelectors";

const mapStateToProps = (state, props) => ({
  post: getPosts(state)[props.postIndex]
});

const mapDispatchToProps = (dispatch, props) => ({
  likePost: () => {
    dispatch({ type: "LIKE_POST", postIndex: props.postIndex })
  },
  addComment: (commentText) => {
    dispatch({ type: "ADD_COMMENT",  postIndex: props.postIndex, comment: commentText })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);