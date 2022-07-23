import React from "react";

import Post from "../component/Post";
import { usePostsQuery } from "../redux/services/postsApi";

const PostList = (props) => {
  const { data: posts, error, isLoading, isSuccess, isError } = usePostsQuery();

  return (
    <div>
      <div>{isLoading && "Loading..."}</div>
      <div>{isError && error}</div>
      <div>
        {isSuccess &&
          posts &&
          posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostList;
