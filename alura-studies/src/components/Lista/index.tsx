import { ITarefa } from "../../types/Itarefa";
import Item from "./Item";
import style from "./lista.module.scss";

interface listaProps {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({tarefas, selecionaTarefa}: listaProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item 
            key={item.id} 
            {...item} 
            selecionaTarefa={selecionaTarefa}
        />
        ))}
      </ul>
    </aside>
  );
}
