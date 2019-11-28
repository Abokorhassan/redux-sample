import React from "react";
import "./App.css";
import Posts from "./components/post/posts";
import PostForm from "./components/post/postForm";
import CakeContainer from "./components/cake/cakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import CakeHooksContainer from "./components/cake/cakeHooksContainer";
import IceCreamContainer from "./components/iceCream/iceCreamContainer";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PostForm />
        <Posts />
        <CakeContainer />
        <CakeHooksContainer />
        <IceCreamContainer />
      </Provider>
    </div>
  );
}

export default App;
