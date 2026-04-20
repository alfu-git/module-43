import React from "react";

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (error) {
//     throw new error("Failed to fetch posts");
//   }
// };

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new error("Failed to fetch posts");
  }

  return res.json();
}

const PostsPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  const posts = await getPosts();

  return <div>posts are coming: {posts.length}</div>;
};

export default PostsPage;
