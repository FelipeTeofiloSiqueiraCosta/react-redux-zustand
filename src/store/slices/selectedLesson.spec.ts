import { describe, expect, it } from "vitest";
import { select, selectNextLesson } from "./selectedLesson";
import { selectedLessonSlice } from "./selectedLesson";
describe("Selected Lesson", () => {
  it("Should be able to select a lesson passing moduleIndex and lessonIndex", () => {
    const initialState = selectedLessonSlice.getInitialState();
    const reducer = selectedLessonSlice.reducer;
    const state = reducer(
      initialState,
      select({ lessonIndex: 1, moduleIndex: 1 })
    );

    expect(state.lessonIndex).toBe(1);
    expect(state.moduleIndex).toBe(1);
  });

  it("Should be able to play next video when video is ended", () => {
    const initialState = selectedLessonSlice.getInitialState();
    const reducer = selectedLessonSlice.reducer;
    const state = reducer(
      initialState,
      selectNextLesson({ lessonIndex: 1, moduleIndex: 1 })
    );

    expect(state.lessonIndex).toBe(1);
    expect(state.moduleIndex).toBe(1);
  });
});
