import React, { useState } from "react";
import style from "./Filtro.module.scss";
import { useSetRecoilState } from "recoil";
import { filtroState } from "../../state/atom";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";

const Filtro: React.FC = () => {
  const [data, setData] = useState("");
  const [eventoStatus, setEventoStatus] = useState("");

  const setFiltroDeEvento = useSetRecoilState<IFiltroDeEventos>(filtroState);

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filtro: IFiltroDeEventos = {
      data: data ? new Date(data) : null,
      ambos: true
    };

    if (eventoStatus === "completos") {
      filtro.ambos = false;
      filtro.completo = true;
    } else if (eventoStatus === "incompletos") {
      filtro.ambos = false;
      filtro.incompleto = true;
    } else {
      filtro.ambos = true;
    }

    setFiltroDeEvento(filtro);
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>
      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />
      <div>
        <h3 className={style.titulo}>Filtrar por Status da Tarefa</h3>
        <p>
          <input
            type="radio"
            name="eventoStatus"
            id="ambos"
            value="ambos"
            onChange={(e) => setEventoStatus(e.target.value)}
          />
          <label htmlFor="ambos">Ambos</label>
        </p>
        <p>
          <input
            type="radio"
            name="eventoStatus"
            id="completos"
            value="completos"
            onChange={(e) => setEventoStatus(e.target.value)}
          />
          <label htmlFor="completos">Completos</label>
        </p>
        <p>
          <input
            type="radio"
            name="eventoStatus"
            id="incompletos"
            value="incompletos"
            onChange={(e) => setEventoStatus(e.target.value)}
          />
          <label htmlFor="incompletos">Incompletos</label>
        </p>
      </div>
      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
