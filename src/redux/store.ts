import { configureStore } from "@reduxjs/toolkit";
import peopleSlice from "./peopleSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    people: peopleSlice,
    search: searchSlice,
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;