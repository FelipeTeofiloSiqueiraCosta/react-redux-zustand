import { Video } from "lucide-react";
import { useDispatch } from "react-redux";
import { select } from "../store/slices/selectedLesson";
import { useAppSelector } from "../store";

interface LessonProps {
  id: string;
  title: string;
  minutes: string;
  moduleIndex: number;
}
export function Lesson({ title, minutes, id, moduleIndex }: LessonProps) {
  const dispatch = useDispatch();
  const selectedLesson = useAppSelector((state) => state.selectedLesson);

  function handleSelectLesson() {
    dispatch(select({ lessonId: id, moduleIndex }));
  }
  const isSelected = selectedLesson.lessonId === id;

  return (
    <button
      data-active={isSelected}
      className={
        "flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-emerald-500 group"
      }
      onClick={handleSelectLesson}
    >
      <Video className="h-4 w-4 text-zinc-500 group-data-[active=true]:text-emerald-500" />
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">{minutes}</span>
    </button>
  );
}
