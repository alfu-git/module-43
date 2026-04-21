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
};

const PostsPage = async () => {
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const posts = await res.json();

  const posts = await getPosts();

  return (
    <section className="my-10">
      <div>
        <h2 className="mb-7 text-4xl font-medium text-center">All Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {posts.map((post) => (
            <div key={post.id} className="p-4 bg-[#212121] rounded-xl">
              <h4 className="mb-3 text-xl font-bold">{post.title}</h4>
              <p className="text-lg">{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
