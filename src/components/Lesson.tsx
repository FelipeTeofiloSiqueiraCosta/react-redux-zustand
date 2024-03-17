import { Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { select } from "../store/slices/selectedLesson";
import { useAppSelector } from "../store";

interface LessonProps {
  id: string;
  title: string;
  minutes: string;
}
export function Lesson({ title, minutes, id }: LessonProps) {
  const dispatch = useDispatch();
  const selectedLesson = useAppSelector((state) => state.selectedLesson);

  function handleSelectLesson() {
    dispatch(select({ lessonId: id }));
  }
  const isSelected = selectedLesson === id;
  return (
    <button
      className={
        "flex items-center gap-3 text-sm text-zinc-400 " +
        (isSelected ? "!text-purple-500" : "")
      }
      onClick={handleSelectLesson}
    >
      <Video className="h-4 w-4 text-zinc-500 " />
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">{minutes}</span>
    </button>
  );
}
