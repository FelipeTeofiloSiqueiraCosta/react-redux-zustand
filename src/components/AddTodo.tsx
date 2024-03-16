import { useState } from "react";
import { add } from "../store";
import { useDispatch } from "react-redux";

export function AddTodo() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(add(todo));
    setTodo("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
