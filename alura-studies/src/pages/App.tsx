import { useState } from "react";
import Cronometro from "../components/Cronometro";
import { Formulario } from "../components/Formulario";
import Lista from "../components/Lista";
import style from './app.module.scss';
import { ITarefa } from "../types/Itarefa";

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa): void {
    setTarefaSelecionada(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if(tarefaSelecionada) {
      setTarefaSelecionada(undefined)
      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if(tarefa.id === tarefaSelecionada.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }

        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Cronometro 
        selecionado={tarefaSelecionada}
        finalizarTarefa={finalizarTarefa}
      />
      <Lista 
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />
    </div>
  );
}

export default App;
