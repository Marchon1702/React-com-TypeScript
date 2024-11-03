import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";
import { gerarId } from "../../utils/utils";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  const obterId = gerarId();

  return (evento: IEvento) => {

    const hoje = new Date(); 
    if(evento.inicio < hoje) {
        throw Error('Data de inicio precisa não pode ser menor que data atual.')
    }

    evento.id = obterId;
    setListaDeEventos(listaAnterior => [...listaAnterior, evento])
  };
};

export default useAdicionarEvento;
