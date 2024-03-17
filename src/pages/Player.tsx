import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules);
  const { lessonId, moduleIndex } = useAppSelector(
    (state) => state.selectedLesson
  );

  const selectedLesson =
    modules[moduleIndex].lessons.find((item) => item.id === lessonId) ??
    modules[moduleIndex].lessons[0];

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="w-[1100px] flex flex-col gap-6">
        <Header
          videoClassName={modules[moduleIndex].title}
          description={"Modulo '" + selectedLesson.title + "'"}
        />
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPlayer
                key={selectedLesson.id}
                width="100%"
                height="100%"
                controls
                url={"https://www.youtube.com/watch?v=" + selectedLesson.id}
              />
            </div>
          </div>
          <aside className="absolute top-0 bottom-0 right-0 w-80 border-l divide-y-2 divide-zinc-600 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {modules.map(({ lessons, title, id }, index) => {
              return (
                <Module
                  index={index}
                  number={index + 1}
                  title={title}
                  lessons={lessons}
                  key={id}
                />
              );
            })}
          </aside>
        </main>
      </div>
    </div>
  );
}
