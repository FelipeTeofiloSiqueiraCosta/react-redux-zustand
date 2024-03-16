import { useAppSelector } from "../store";

export function TodoList() {
  // aqui eu estou usando um hoom, que é o useSelector, para pegar o estado do redux

  const store = useAppSelector((store) => {
    // nesse caso eu estou retornando todo o store mas eu poderia retornar apenas o que eu quisesse
    // ex: store.todo
    return store;
  });
  console.log(store);
  return (
    <ul>
      {store.todo.map((todo: string, index: number) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}
