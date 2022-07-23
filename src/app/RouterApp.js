import React from "react";
import { Routes, Route } from "react-router-dom";

import PostList from "./pages/PostList";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import PostUpdate from "./pages/UpdatePost";
import NotFound from "./pages/NotFound";
// import Login from './Login/Login';

const RouterApp = () => {
  return (
    <Routes>
      {/* <Route path="/" element={<Login />}></Route> */}
      <Route path="/movies" element={<PostList />} />
      <Route path="/movies/create" element={<CreatePost />} />
      <Route path="/movies/:movieId" element={<PostDetails />} />
      <Route path="/movies/edit/:movieId" element={<PostUpdate />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouterApp;
