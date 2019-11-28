import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../redux/actions/postActions";
import { PropTypes } from "prop-types";

class Posts extends Component {
  state = {
    posts: []
  };

  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       posts: []
  //     };
  //   }

  // componentDidMount() {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
  //     .then(res => this.setState({ posts: res.data }));
  //   //   .then(res => console.log(res.data));
  // }

  componentDidMount() {
    console.log("before", this.props);
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

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
