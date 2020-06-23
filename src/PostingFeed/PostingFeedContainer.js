import { connect } from "react-redux";
import PostingFeed from "./PostingFeed";
import { getPosts } from "../selectors/postSelectors";

const mapStateToProps = state => ({
  allPosts: getPosts(state),
});

export default connect(mapStateToProps)(PostingFeed);
