import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios";

export function fetchPosts() {
  return function(dispatch) {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then(res =>
        dispatch({
          type: FETCH_POSTS,
          payload: res.data
        })
      );
  };
}

export function createPost(postData) {
  console.log("action");
  return function(dispatch) {
    // e.preventDefault();
    // const post = {
    //   title: this.state.title,
    //   body: this.state.body
    // };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", postData)
      //   .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
      .then(res =>
        dispatch({
          type: NEW_POST,
          payload: res.data
        })
      );
  };
}
