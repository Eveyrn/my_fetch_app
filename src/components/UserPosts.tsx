import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Post } from "../types";

const UserPosts = () => {
  const { userId } = useParams<{ userId: string }>();
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, [userId]);

  return (
    <div className="container">
      <h1>User Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="post-card">{post.title}</li>
        ))}
      </ul>
      <Link to="/">🔙 Back to Users</Link>
    </div>
  );
};

export default UserPosts;
