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
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);