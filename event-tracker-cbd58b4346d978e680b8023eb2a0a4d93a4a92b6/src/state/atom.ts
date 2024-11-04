import { atom } from "recoil";
import { IEvento } from "../interfaces/IEvento";
import { eventosAsync } from "./seletores";

export const listaDeEventosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync
});

export const filtroState = atom({
  key: 'filtroState',
  default: {
    ambos: true
  }
})
