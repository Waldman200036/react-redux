import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from 'react-router-dom';

import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/posts/PostsList";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <PostsList />
    </React.Fragment>
  );
}

export default App;
