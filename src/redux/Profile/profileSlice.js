import { createSlice, nanoid } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: { id: "", email: "", password: "", isLoggedIn: false },
  reducers: {
    logInProfile: {
      reducer(state, { payload }) {
        return (state = { ...payload });
      },
      prepare(value) {
        return {
          payload: {
            ...value,
            id: nanoid(),
            isLoggedIn: true,
          },
        };
      },
    },
    logOutProfile(state) {
      return (state = { id: "", email: "", password: "", isLoggedIn: false });
    },
  },
});

export const { logInProfile, logOutProfile } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
