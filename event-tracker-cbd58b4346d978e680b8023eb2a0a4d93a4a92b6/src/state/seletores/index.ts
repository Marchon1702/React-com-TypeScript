import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroState, listaDeEventosState } from "../atom";
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos";

export const eventosFiltradosState = selector<IEvento[]>({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const todosOsEventos = get(listaDeEventosState);
    const filtro: IFiltroDeEventos = get(filtroState);
    const eventos = todosOsEventos.filter((evento) => {
      if(!filtro.data && filtro.ambos) return true
      
      const ehOhMesmoDia = filtro.data ?
         filtro.data?.toISOString().slice(0, 10) ===
         evento.inicio.toISOString().slice(0, 10): true;

      if (filtro.completo) return ehOhMesmoDia && evento.completo;

      if (filtro.incompleto) return ehOhMesmoDia && !evento.completo;

      if(filtro.ambos) return ehOhMesmoDia;
    });

    return eventos;
  }
});
