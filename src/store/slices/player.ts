import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../lib/api";

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

export const loadCourse = createAsyncThunk("player/setCourse", async () => {
  const response = await api.get<
    unknown,
    { data: Module[]; status: number },
    unknown
  >("/modules");
  // await new Promise((resolve) => setTimeout(resolve, 2000)); // adding a delay to simulate a real API request
  return response.data;
  // essa funcão é uma action asyncrona
});

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    course: {
      modules: [] as Module[],
    },
    isLoading: true,
  },
  reducers: {},
  extraReducers: (builder) => {
    // quando a action loadCourse for completada com sucesso
    // o builder vai atualizar o estado do player
    builder.addCase(loadCourse.fulfilled, (state, action) => {
      state.course.modules = action.payload;
      state.isLoading = false;
    });
    builder.addCase(loadCourse.pending, (state) => {
      state.isLoading = true;
    });
  },
});
