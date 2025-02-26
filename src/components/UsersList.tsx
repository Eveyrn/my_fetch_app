import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Box } from "@mui/material";
import { User } from "../types";
import { apiInstance } from "../api";
import './UsersList.css'; 
const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await apiInstance.get<User[]>("/users");
        setUsers(data);
      } catch (error) {
        setError("Failed to fetch users. Please try again.");
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <Box className="container" sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Users</Typography>

      {error && <Typography color="error">{error}</Typography>}

      <List>
        {users.map((user) => (
          <ListItem key={user.id} className="user-card">
            <ListItemAvatar>
              <Avatar src={`https://robohash.org/${user.id}?size=50x50`} alt={user.name} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Link to={`/posts/${user.id}`} className="user-name">
                  {user.name}
                </Link>
              }
              secondary={
                <>
                  <Typography variant="body2">{user.email}</Typography>
                  <Typography variant="caption">{user.company.name}</Typography>
                </>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UsersList;
