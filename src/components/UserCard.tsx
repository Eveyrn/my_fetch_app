import { Card, CardContent, Typography, Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { User } from "../types";

const UserCard: React.FC<{ user: User }> = ({ user }) => (
  <Card sx={{ display: "flex", alignItems: "center", p: 2, mb: 2 }}>
    <Avatar src={`https://robohash.org/${user.id}?size=50x50`} />
    <CardContent>
      <Typography variant="h6">
        <Link to={`/posts/${user.id}`} style={{ textDecoration: "none", color: "inherit" }}>
          {user.name}
        </Link>
      </Typography>
      <Typography variant="body2">{user.email}</Typography>
      <Typography variant="caption">{user.company.name}</Typography>
    </CardContent>
  </Card>
);

export default UserCard;
