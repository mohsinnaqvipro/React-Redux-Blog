import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function UserList() {
  const [user, setUser] = useState([]);

  useEffect(async () => {
    let res = await fetch("https://jsonplaceholder.typicode.com/users/");
    let json = await res.json();
    setUser(json);
  }, []);
  console.log(user);
  return (
    <div>
      <h1>Hellow this is userList component</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>email</th>
            <th>phone</th>
            <th>website</th>
          </tr>
        </thead>
        <tbody>
          {user.map((ele, index) => (
            <tr key={index}>
              <td>{ele.id}</td>
              <td>{ele.username}</td>
              <td>{ele.email}</td>
              <td>{ele.phone}</td>
              <td>{ele.website}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
