import ReactPlayer from "react-player";
import { Header } from "../components/Header";
import { Module } from "../components/Module";
import { useAppDispatch, useAppSelector } from "../store";

import { selectNextLesson } from "../store/slices/selectedLesson";
import { Lesson, loadCourse } from "../store/slices/player";
import { useEffect } from "react";

export function Player() {
  const {
    course: { modules },
    isLoading: isLoadingPlayer,
  } = useAppSelector((state) => state.player);
  const { lessonIndex, moduleIndex } = useAppSelector(
    (state) => state.selectedLesson
  );

  const dispatch = useAppDispatch();

  const selectedLesson =
    modules.length > 0
      ? modules[moduleIndex].lessons[lessonIndex]
      : ({ duration: "00:00", id: -1, title: "Carregando..." } as Lesson);

  // async function fetchModules() {
  // const response = await api.get<
  //   unknown,
  //   { data: ModuleType[]; status: number },
  //   unknown
  // >("/modules");
  // console.log(response.data);
  // dispatch(setCourse({ modules: response.data }));
  // }

  useEffect(() => {
    // fetchModules();
    dispatch(loadCourse());
  }, []);
  console.log({ isLoadingPlayer });

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="w-[1100px] flex flex-col gap-6">
        <Header
          videoClassName={
            !isLoadingPlayer ? modules[moduleIndex].title : "Carregando..."
          }
          description={"Modulo '" + selectedLesson.title + "'"}
        />
        {isLoadingPlayer ? (
          "Carregando..."
        ) : (
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
        )}
      </div>
    </div>
  );
}
