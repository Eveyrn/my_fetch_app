// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import axios from "axios";
// import { Post } from "../types";

// const UserPosts = () => {
//   const { userId } = useParams<{ userId: string }>();
//   const [posts, setPosts] = useState<Post[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, [userId]);

//   return (
//     <div className="container">
//       <h1>User Posts</h1>
//       <ul>
//         {posts.map((post) => (
//           <li key={post.id} className="post-card">{post.title}</li>
//         ))}
//       </ul>
//       <Link to="/">🔙 Back to Users</Link>
//     </div>
//   );
// };

// export default UserPosts;

// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Typography, Box } from "@mui/material";
// import { Post } from "../types";
// import { apiInstance } from "../api";
// import PostCards from "./PostCards";

// const UserPosts = () => {
//   const { userId } = useParams<{ userId: string }>();
//   const numericUserId = Number(userId);
//   const [posts, setPosts] = useState<Post[]>([]);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const { data } = await apiInstance.get<Post[]>("/posts", {
//           params: { userId: numericUserId },
//         });
//         setPosts(data);
//       } catch (error) {
//         setError("Failed to fetch posts. Please try again.");
//         console.error("Error fetching posts:", error);
//       }
//     };
//     fetchPosts();
//   }, [numericUserId]);

//   return (
//     <Container sx={{ mt: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         User Posts
//       </Typography>
//       {error && <Typography color="error">{error}</Typography>}
//       <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
//         {posts.map((post) => (
//           <PostCards key={post.id} post={post} />
//         ))}
//       </Box>
//       <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
//         <Button variant="contained" component="a" href="/" sx={{}}>
//           🔙 Back to Users
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default UserPosts;





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

      {isLoading && <CircularProgress />} {/* Loading indicator */}
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

