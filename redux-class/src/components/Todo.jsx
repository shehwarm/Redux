import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task} {todo.isDone ? "(Done)" : "(Pending)"}

            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>

            <button
              onClick={() => dispatch(markAsDone(todo.id))}
              disabled={todo.isDone}
            >
              Mark as Done
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
