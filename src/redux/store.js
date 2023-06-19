import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./Profile/profileSlice";
import { questionsReducer } from "./Questions/questionsSlice";

export default configureStore({
  reducer: { profile: profileReducer, questions: questionsReducer },
});
