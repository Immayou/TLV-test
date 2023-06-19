import { createSlice, nanoid } from "@reduxjs/toolkit";

const logInSuccessReducer = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
};

const logOutSuccessReducer = (state) => {
  state.profile = { email: null, password: null };
  state.isLoggedIn = false;
};

const refreshSuccessReducer = (state, action) => {
  state.profile = action.payload;
  state.isLoggedIn = true;
};

const pendingReducer = (state) => {
  state.isLoading = true;
};

const rejectedReducer = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const profileSlice = createSlice({
  name: "profile",
  initialState: { id: "", email: "", password: "", isLoggedIn: false },
  reducers: {
    logInProfile: {
      reducer(state, { payload }) {
        console.log(payload);
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
