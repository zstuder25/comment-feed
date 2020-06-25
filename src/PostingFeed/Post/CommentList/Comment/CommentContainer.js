import {connect} from "react-redux";
import Comment from "./Comment";

  const mapDispatchToProps = (dispatch, props) => ({
    likeComment: () => {
      dispatch({ type: "LIKE_COMMENT",  postIndex: props.postIndex, commentIndex: props.commentIndex })
    },
    editComment: (commentText) => {
      dispatch({ type: "EDIT_COMMENT",  postIndex: props.postIndex, commentIndex: props.commentIndex, commentText: commentText })
    },
    deleteComment: () => {
      dispatch({ type: "DELETE_COMMENT",  postIndex: props.postIndex, commentIndex: props.commentIndex })
    },
});

export default connect(null, mapDispatchToProps)(Comment);