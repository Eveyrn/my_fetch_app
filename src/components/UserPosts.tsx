
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Typography, Box, Button, CircularProgress } from "@mui/material";
import { Post } from "../types";
import { apiInstance } from "../api";
import PostCards from "./PostCards";
import "./UserPosts.css";

const UserPosts = () => {
  const { userId } = useParams<{ userId: string }>();
  const numericUserId = Number(userId);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const { data } = await apiInstance.get<Post[]>("/posts", {
          params: { userId: numericUserId },
        });
        setPosts(data);
      } catch (error) {
        setError("Failed to fetch posts. Please try again.");
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, [numericUserId]);

  return (
    <div className="user-posts-container">
      <Typography variant="h4" gutterBottom className="title">User Posts</Typography>

      {isLoading && <CircularProgress />} 
      {error && <Typography color="error">{error}</Typography>}

      <Box className="posts-grid">
        {posts.map((post) => (
          <PostCards key={post.id} post={post} />
        ))}
      </Box>

      <Box className="button-container">
        <Button variant="contained" className="back-button" component={Link} to="/">
          🔙 Back to Users
        </Button>
      </Box>
    </div>
  );
};

export default UserPosts;

