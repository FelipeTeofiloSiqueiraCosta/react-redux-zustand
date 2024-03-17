import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectedLessonSlice = createSlice({
  name: "selectedLesson",
  initialState: {
    lessonId: "",
    moduleIndex: 0,
  },
  reducers: {
    select: (
      state,
      action: PayloadAction<{ lessonId: string; moduleIndex: number }>
    ) => {
      return (state = action.payload);
    },
  },
});

export const { select } = selectedLessonSlice.actions;
