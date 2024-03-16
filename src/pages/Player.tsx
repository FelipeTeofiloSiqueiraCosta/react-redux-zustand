import { ChevronDown, MessageCircle, Video } from "lucide-react";
import ReactPlayer from "react-player";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="w-[1100px] flex flex-col gap-6">
        <div className="flex items-center justify-between">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do redux</h1>
            <span className="text-sm text-zinc-400">
              Modulo "Desvendando o Redux"
            </span>
          </div>
          <button className="flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white hover:bg-violet-700 transition">
            <MessageCircle className="h-4 w-4" />
            Deixar feedback
          </button>
        </div>
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=HVAR85rorvU"
              />
            </div>
          </div>
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900">
            <div>
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <span className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-sm">
                  1
                </span>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Desvendando o Redux</strong>
                  <span className="text-xs text-zinc-400">12 aulas</span>
                </div>
                <ChevronDown className="h-4 w-4 ml-auto text-zinc-400" />
              </button>
              <nav className="flex flex-col relative gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500 " />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    09:40
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <Video className="h-4 w-4 text-zinc-500 " />
                  <span>Fundamentos do Redux</span>
                  <span className="ml-auto font-mono text-sm text-zinc-500">
                    09:40
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
