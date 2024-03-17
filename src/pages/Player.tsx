import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { useAppSelector } from "../store";
import { useDispatch } from "react-redux";
import { selectNextLesson } from "../store/slices/selectedLesson";

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules);
  const { lessonIndex, moduleIndex } = useAppSelector(
    (state) => state.selectedLesson
  );
  const dispatch = useDispatch();

  const selectedLesson = modules[moduleIndex].lessons[lessonIndex];

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
                onEnded={() => {
                  if (lessonIndex < modules[moduleIndex].lessons.length - 1) {
                    dispatch(
                      selectNextLesson({
                        lessonIndex: lessonIndex + 1,
                        moduleIndex,
                      })
                    );
                  } else if (moduleIndex < modules.length - 1) {
                    dispatch(
                      selectNextLesson({
                        lessonIndex: 0,
                        moduleIndex: moduleIndex + 1,
                      })
                    );
                  }
                }}
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
