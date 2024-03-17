import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectedLessonSlice = createSlice({
  name: "selectedLesson",
  initialState: {
    lessonIndex: 0,
    moduleIndex: 0,
  },
  reducers: {
    select: (
      state,
      action: PayloadAction<{ lessonIndex: number; moduleIndex: number }>
    ) => {
      return (state = action.payload);
    },
    selectNextLesson: (
      state,
      action: PayloadAction<{ lessonIndex: number; moduleIndex: number }>
    ) => {
      state = action.payload;
      return state;
    },
  },
});

export const { select, selectNextLesson } = selectedLessonSlice.actions;
