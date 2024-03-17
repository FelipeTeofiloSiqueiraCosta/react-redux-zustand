import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const selectedLessonSlice = createSlice({
  name: "selectedLesson",
  initialState: "",
  reducers: {
    select: (state, action: PayloadAction<{ lessonId: string }>) => {
      const { lessonId } = action.payload;

      return (state = lessonId);
    },
  },
});

export const { select } = selectedLessonSlice.actions;
