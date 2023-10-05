import React, { useState } from "react";
import { addUser } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Create.scss";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name: name,
        email: email,
      })
    );
    navigate("/");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSubmit}>
        <h3 className="title">Add New User</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            className="nameInput"
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            className="emailInput"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Create;
