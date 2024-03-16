import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
const todoSlice = createSlice({
  name: "todo",
  initialState: ["fazer café", "estudar redux"],

  reducers: {
    add: (state, action) => {
      console.log({ state, action });

      state.push(action.payload);
    },
  },
});

export const { add } = todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
