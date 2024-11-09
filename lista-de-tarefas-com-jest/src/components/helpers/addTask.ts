import editTask from "./editTaskList";

export default function addTask(
  newTask: string,
  prevTasks: string[]
): string[] {

  
  return [...prevTasks, newTask];
}
