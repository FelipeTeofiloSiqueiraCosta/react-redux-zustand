import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Lesson {
  id: number;
  title: string;
  duration: string;
}
export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [] as Module[],
    },
  },
  reducers: {
    setCourse: (state, action: PayloadAction<{ modules: Module[] }>) => {
      state.course = action.payload;
    },
  },
});

export const { setCourse } = playerSlice.actions;
