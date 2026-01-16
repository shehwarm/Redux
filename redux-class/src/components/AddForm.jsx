import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <>
      <h2>Add Todo</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={task}
          placeholder="Enter task..."
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
    </>
  );
}
