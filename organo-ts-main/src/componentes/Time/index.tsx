import Colaborador from "../Colaborador";
import "./Time.css";
import IColaborador from "../../compartilhados/interfaces/IColaborador";

interface TimeProps {
  corPrimaria: string;
  corSecundaria: string;
  nome: string;
  colaboradores: IColaborador[];
}

const Time = ({
  corPrimaria,
  corSecundaria,
  nome,
  colaboradores,
}: TimeProps) => {
  const css = { backgroundColor: corSecundaria };

  return (
    <section className="time" style={css}>
      <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
      <div className="colaboradores">
        {colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={corPrimaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  )
};

export default Time;
