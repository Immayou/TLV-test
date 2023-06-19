import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { profileReducer } from "./Profile/profileSlice";
import { questionsReducer } from "./Questions/questionsSlice";

const authPersistConfig = {
  key: "profile",
  storage,
};

export const store = configureStore({
  reducer: {
    profile: persistReducer(authPersistConfig, profileReducer),
    questions: questionsReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
  devTools: process.env.NODE_ENV === "development",
});

export const persistor = persistStore(store);
