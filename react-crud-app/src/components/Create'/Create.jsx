import React, { useState } from "react";
import { addUser } from "../../features/users/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <h3>Add New User</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
