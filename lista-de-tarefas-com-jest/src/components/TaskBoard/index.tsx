import { useState } from "react";
import ListTasks from "../ListTasks";
import addTask from "../helpers/addTask";
import removeTask from "../helpers/removeTask";

export default function TaskBoard() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [taskToEdit, setTaskToEdit] = useState("")

  const submeter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    setTasks((prevTasks) => {
        if(prevTasks.includes(newTask)) {
            console.error("Essa tarefa já existe!")
            return prevTasks
        }

        if(taskToEdit) {
          return prevTasks.map(task => {
            if(task === taskToEdit) {
              return newTask
            }

            return task
          })
        }

        return addTask(newTask, prevTasks)
    });

    setNewTask('')
  };

  return (
    <section className="task-board">
      <form role="form" onSubmit={submeter}>
        <input
          required
          type="text"
          placeholder="Digite uma nova tarefa"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button>Adicionar</button>
      </form>
      <ListTasks tasks={tasks} setTasks={setTasks} removeTask={removeTask} setToEditTask={setTaskToEdit}/>
    </section>
  );
}
