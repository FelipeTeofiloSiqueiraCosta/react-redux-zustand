import { Video } from "lucide-react";

interface LessonProps {
  title: string;
  minutes: string;
}
export function Lesson({ title, minutes }: LessonProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <Video className="h-4 w-4 text-zinc-500 " />
      <span>{title}</span>
      <span className="ml-auto font-mono text-sm text-zinc-500">{minutes}</span>
    </button>
  );
}
