import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Module } from "../components/Module";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="w-[1100px] flex flex-col gap-6">
        <Header
          videoClassName="Fundamentos do redux"
          description="Modulo 'Desvendando o Redux'"
        />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
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
          <aside className="absolute top-0 bottom-0 right-0 w-80 border-l divide-y-2 divide-zinc-600 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <Module
              number={1}
              title="Desvendando o Redux"
              videoClasses={[
                { minutes: "10:00", title: "Introdução ao modulo" },
                { minutes: "10:00", title: "O que é Redux" },
              ]}
            />
            <Module
              number={1}
              title="Desvendando o Redux"
              videoClasses={[
                { minutes: "10:00", title: "Introdução ao modulo" },
                { minutes: "10:00", title: "O que é Redux" },
              ]}
            />
            <Module
              number={1}
              title="Desvendando o Redux"
              videoClasses={[
                { minutes: "10:00", title: "Introdução ao modulo" },
                { minutes: "10:00", title: "O que é Redux" },
              ]}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
