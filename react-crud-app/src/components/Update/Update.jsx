import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../features/users/userSlice";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const currentUser = users.filter((f) => f.id == id);
  const { name, email } = currentUser[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: updateName,
        email: updateEmail,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <form action="" onSubmit={handleUpdate}>
        <h3>Update User</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={updateName}
            onChange={(e) => setUpdateName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={updateEmail}
            onChange={(e) => setUpdateEmail(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
