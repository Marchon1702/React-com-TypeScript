import { Dispatch, SetStateAction } from "react";
import editTask from "../helpers/editTaskList";

interface ListTaskProps {
  tasks: string[];
  setTasks: Dispatch<SetStateAction<string[]>>;
  setToEditTask: Dispatch<SetStateAction<string>>;
  removeTask: (gonnaBeDelTask: string, tasks: string[]) => string[];
}

export default function ListTasks({
  tasks,
  removeTask,
  setTasks,
  setToEditTask,
}: ListTaskProps) {
  return (
    <ul role="unordenedList">
      {tasks.map((task) => (
        <li key={task}>
          {" "}
          <span>{task}</span>{" "}
          <span>
            <button onClick={() => setTasks(removeTask(task, tasks))}>
              Del
            </button>{" "}
            <button onClick={() => setToEditTask(editTask(task))}>Edit</button>
          </span>
        </li>
      ))}
    </ul>
  );
}
