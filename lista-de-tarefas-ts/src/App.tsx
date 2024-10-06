import { useState } from "react";
import InsertTaskArea from "./components/InsertTaskArea";
import PageTitle from "./components/PageTitle";
import TasksArea from "./components/TasksArea";
import { MeusIcones } from "./enums/icons";
import { ITask } from "./shares/ITask";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const addNewTask = (newTask: ITask) => setTasks([...tasks, newTask])
  
  return (
    <div className="App">
        <header>
          <PageTitle />
          <InsertTaskArea 
            addTask={addNewTask}
          />
        </header>
        <main>
          <section className="section__tasks">
            <TasksArea
              priority="Baixa"
              priorityIcon={MeusIcones.ARROWDOWN}
              priorityAlt="Arrow Down"
              tasks={tasks}
            />
            <TasksArea
              priority="Média"
              priorityIcon={MeusIcones.ARROWRIGHT}
              priorityAlt="Arrow Right"
              tasks={tasks}
            />
            <TasksArea
              priority="Alta"
              priorityIcon={MeusIcones.ARROWUP}
              priorityAlt="Arrow Up"
              tasks={tasks}
            />
          </section>
        </main>
    </div>
  );
}
export default App;
