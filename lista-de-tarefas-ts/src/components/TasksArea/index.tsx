import { useEffect, useState } from "react";
import { ITask } from "../../shares/ITask";
import EachTask from "../EachTask";

interface TasksAreaProps {
  tasks: ITask[];
  priority: string;
  priorityIcon: string;
  priorityAlt: string;
}

export default function TasksArea({
  tasks,
  priority,
  priorityIcon,
  priorityAlt,
}: TasksAreaProps) {

  const [myTasks, setMyTasks] = useState<ITask[]>([]);

  useEffect(() => {
    setMyTasks(tasks.filter((task) => task.priority === priority))
  }, [tasks])

  const toogleDone = (checkedTask: ITask) =>
    setMyTasks(
      tasks.map((task): ITask => {
        if (checkedTask.id === task.id) {
          task.done = task.done ? false : true ;
          return task;
        }

        return task;
      })
    );

  return (
    <article className="taskArea">
      <h2>
        Prioridade: {priority} <img src={priorityIcon} alt={priorityAlt} />
      </h2>
      <ul>
        {myTasks.map((task) => {
          return <EachTask key={task.id} task={task} toogleDone={toogleDone}/>;
        })}
      </ul>
    </article>
  );
}
