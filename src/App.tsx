import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <TodoList />
      <AddTodo />
    </ReduxProvider>
  );
}

export default App;
