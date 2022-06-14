import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

import { ApiHelperFunction } from "../Helper/apiHelper";

export const LoginUser = createAsyncThunk("LoginUser", async (formdata) => {
  const response = await ApiHelperFunction({
    urlPath: `/loginProfile`,
    method: "post",
    formData: formdata,
  });
  return response;
});

// const initialState = {
//   status: "idle",
// };
// type user = {
//   email: string;
//   password: number | string;
// };

export const UserData = createSlice({
  name: "UserData",
  initialState: {
    user: "null",
  },

  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(state.user));
    },

    signup: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.user = "loading";
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.user = "true";
        if (action.payload.status === 200) {
          console.log("In extra reducer", action.payload);
          // notification(action.payload.data.message, "success");
        }
      });
  },
});

export const actions = UserData.actions;
export default LoginUser;
