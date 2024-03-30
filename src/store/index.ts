import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { playerSlice } from "./slices/player";
import { selectedLessonSlice } from "./slices/selectedLesson";

export const store = configureStore({
  reducer: {
    player: playerSlice.reducer,
    selectedLesson: selectedLessonSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
