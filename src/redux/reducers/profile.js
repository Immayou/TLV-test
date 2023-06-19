import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    setProfile: (state, { payload }) => {
      state = payload;
    },
  },
});

export const { setProfile } = profileSlice.actions;
export default profileSlice.reducer;
