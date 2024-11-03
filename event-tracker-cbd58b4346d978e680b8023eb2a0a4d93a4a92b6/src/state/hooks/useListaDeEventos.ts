import { useRecoilState, useRecoilValue } from "recoil"
import { listaDeEventosState } from "../atom"
import { IEvento } from "../../interfaces/IEvento";

const useListaDeEventos = (): IEvento[] => {
    return useRecoilValue(listaDeEventosState);
}

export default useListaDeEventos;