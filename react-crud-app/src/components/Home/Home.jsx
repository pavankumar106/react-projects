import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { Button } from "bootstrap";

const Home = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="container">
      <h2 className="header">CRUD App</h2>

      <button className="btn btn-success my-3">Create +</button>
      <Table className="table">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
