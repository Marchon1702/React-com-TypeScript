import { useState } from "react";
import { MeusIcones } from "../../enums/icons";
import { ITask } from "../../shares/ITask";

interface InsertTaskAreaProps {
    addTask: (value: ITask) => void
}

export default function InsertTaskArea({addTask}: InsertTaskAreaProps) {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");

  const resetForm = () => {
    setDescription('')
    setPriority('')
  }

  return (
    <form className="insertTaskArea" onSubmit={event => {
        event.preventDefault()
        addTask({
            id: Date.now().toString(36),
            description: description,
            priority: priority,
            done: false
        })
        resetForm()
    }}>
      <div className="textArea">
        <label htmlFor="addTask">Adicionar Tarefa</label>
        <input
          type="text"
          id="addTask"
          value={description}
          placeholder="Digite sua tarefa aqui..."
          onChange={event =>  setDescription(event.target.value)}
        />
      </div>
      <div className="radioArea">
        <div className="custom-radio">
          <input
            type="radio"
            id="addPriority-low"
            name="priority"
            value="Baixa"
            onClick={ event => {setPriority((event.target as HTMLInputElement).value)}}
          />
          <label htmlFor="addPriority-low">
            Baixa
            <img src={MeusIcones.ARROWDOWN} alt="arrow down" />
          </label>
        </div>
        <div className="custom-radio">
          <input
            type="radio"
            id="addPriority-medium"
            name="priority"
            value="Média"
            onClick={ event => {setPriority((event.target as HTMLInputElement).value)}}
          />
          <label htmlFor="addPriority-medium">
            Média
            <img src={MeusIcones.ARROWRIGHT} alt="arrow right" />
          </label>
        </div>
        <div className="custom-radio">
          <input
            type="radio"
            id="addPriority-high"
            name="priority"
            value="Alta"
            onClick={ event => {setPriority((event.target as HTMLInputElement).value)}}
          />
          <label htmlFor="addPriority-high">
            Alta
            <img src={MeusIcones.ARROWUP} alt="arrow high" />
          </label>
        </div>
      </div>
      <button type="submit" className="btnAdicionar">
        Enviar
      </button>
    </form>
  );
}
