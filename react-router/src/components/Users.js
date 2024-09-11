import { NavLink, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import  '../App.css'
import User from './User';
function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {loading && <div>...loading</div>}
        {!loading && users.map((user) => (
          <li key={user.id}>
            <NavLink activeclassname="active" to={`/users/${user.id}`}>{user.name}</NavLink>
          </li>
        ))}
      </ul>

      <Routes>
        <Route path="" element={<div>Kullanıcı seçin</div>} />
        <Route path=":id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;
