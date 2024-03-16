import { ChevronDown } from "lucide-react";
import { Lesson } from "./Lesson";
import * as Collapsible from "@radix-ui/react-collapsible";

interface ModuleProps {
  number: number;
  title: string;
  videoClasses: { title: string; minutes: string }[];
}
export function Module({ videoClasses, number, title }: ModuleProps) {
  return (
    <Collapsible.Root className="group">
      <Collapsible.Trigger asChild>
        <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
          <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
            {number}
          </span>
          <div className="flex flex-col gap-1 text-left">
            <strong className="text-sm">{title}</strong>
            <span className="text-xs text-zinc-400">
              {videoClasses.length} aulas
            </span>
          </div>
          <ChevronDown className="h-4 w-4 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-all" />
        </button>
      </Collapsible.Trigger>
      <Collapsible.Content asChild>
        <nav className="flex flex-col relative gap-4 p-6">
          {videoClasses.map((item) => {
            return (
              <Lesson
                key={item.title}
                title={item.title}
                minutes={item.minutes}
              />
            );
          })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}