import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useAtualizarEvento = (): (evento: IEvento) => void => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    setListaDeEventos((listaAnterior) => {
      const indice = listaAnterior.findIndex((evt) => evt.id === evento.id);
      return [
        ...listaAnterior.slice(0, indice),
        evento,
        ...listaAnterior.slice(indice + 1),
      ];
    });
  };
};

export default useAtualizarEvento;
