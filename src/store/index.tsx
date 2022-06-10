import { configureStore } from "@reduxjs/toolkit";
import { UserData } from "./auth-slice";

const store = configureStore({
  reducer: {
    UserData: UserData.reducer,
  },
});

export default store;
