

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { User } from "../types";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <img src={`https://robohash.org/${user.id}?size=50x50`} alt={user.name} />
            <div>
              <Link to={`/posts/${user.id}`}>{user.name}</Link>
              <p>{user.email}</p>
              <small>{user.company.name}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
