import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { createPost } from "../../redux/actions/postActions";

class PostForm extends Component {
  state = {
    title: "",
    body: ""
  };

  handleOnChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);

    // axios
    //   .post("https://jsonplaceholder.typicode.com/todos", post)
    //   //   .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
    //   .then(res => console.log(res));
  };

  render() {
    return (
      <div>
        <h1>Add Post</h1>

        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title:</label>
            <br />
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleOnChange}
            />
          </div>
          <div>
            <label>Body:</label>
            <br />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <br />
          <button type="submit">Sumbit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
