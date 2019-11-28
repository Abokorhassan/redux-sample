import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";

class PostsHooks extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

// export default connect(mapStateToProps, { fetchPosts })(Posts);
export default PostsHooks;
