import { MessageCircle } from "lucide-react";

interface HeaderProps {
  videoClassName: string;
  description: string;
}
export function Header({ description, videoClassName }: HeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold">{videoClassName}</h1>
        <span className="text-sm text-zinc-400">{description}</span>
      </div>
      <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700 transition">
        <MessageCircle className="h-4 w-4" />
        Deixar feedback
      </button>
    </div>
  );
}
