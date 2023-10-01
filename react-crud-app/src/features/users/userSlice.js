import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../../data/data";

export const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {
    addUser: (state) => {},
  },
});

export default userSlice.reducer;
