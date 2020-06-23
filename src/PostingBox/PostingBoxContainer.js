import {connect} from "react-redux";
import PostingBox from './PostingBox'

const mapDispatchToProps = dispatch => ({
  submitPost: postText => {
    dispatch({ type: "MAKE_POST", post: postText })
  },
});

export default connect(null, mapDispatchToProps)(PostingBox);
