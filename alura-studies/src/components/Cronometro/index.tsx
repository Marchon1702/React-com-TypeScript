import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/Itarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";

interface cronometroProps {
  selecionado: ITarefa | undefined;
  finalizarTarefa: () => void
}

export default function Cronometro({ selecionado, finalizarTarefa }: cronometroProps) {
  const [tempo, setTempo] = useState<number>();

  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1)
      }

      finalizarTarefa()
    }, 1000);
  };

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o crônometro!</p>
      <div className={style.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={() => regressiva(tempo)} texto="Começar" />
    </div>
  );
}
