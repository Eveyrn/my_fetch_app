import { Card, CardContent, Typography } from "@mui/material";
import { Post } from "../types";

const PostCards: React.FC<{ post: Post }> = ({ post }) => (
  <Card sx={{ mb: 2, p: 2 }}>
    <CardContent>
      <Typography variant="h6">{post.title}</Typography>
    </CardContent>
  </Card>
);

export default PostCards;
