import React from "react";
import Botao from "../Botao";
import style from './formulario.module.scss';
import { ITarefa } from "../../types/Itarefa";
import {v4 as uuidv4 } from 'uuid';

export class Formulario extends React.Component<{
  setTarefas:  React.Dispatch<React.SetStateAction<ITarefa[]>>
}> {
  state = {
    tarefa: '',
    tempo: '00:00'
  }

  adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    this.props.setTarefas(tarefasAntigas => [...tarefasAntigas, {...this.state, id: uuidv4(), selecionado: false, completado: false}])
    this.setState({tarefa: '', tempo: '00:00'})
  }

  render() {
    return (
      <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">Tarefa</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.tarefa}
            onChange={evento => this.setState({...this.state, tarefa: evento.target.value })}
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input 
            type="time" 
            name="tempo" 
            value={this.state.tempo}
            onChange={evento => this.setState({...this.state, tempo: evento.target.value})}
            id="tempo"
            step="1"
            min="00:00:00" 
            max="01:30:00"
            required
          />
        </div>
        <Botao
          type="submit"
          texto="Adicionar"
        />
      </form>
    );
  }
}
