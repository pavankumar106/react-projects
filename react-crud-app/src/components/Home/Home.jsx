import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../features/users/userSlice";

import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };

  return (
    <section className="container">
      <div className="header">
        <h2>CRUD App</h2>
      </div>

      <div className="create">
        <Link to="/create" className="create-btn">
          Create +
        </Link>
      </div>

      <table className="table">
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
              <td className="actions-btn">
                <Link className="edit-btn" to={`/update/${user.id}`}>
                  Edit
                </Link>
                <button
                  className="del-btn"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Home;
