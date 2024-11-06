import { useRef, useState } from "react";
import { useAdicionarParticipanteLista } from "../../state/hooks/useAdicionarParticipantesLista";
import { useMensagemDeErro } from "../../state/hooks/useMensagemDeErro";

export default function Formulario() {
  const [nome, setNome] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipanteLista();
  const mensagemErro = useMensagemDeErro()

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    adicionarNaLista(nome)
    inputRef.current?.focus();
    setNome("")
  };

  return (
    <form onSubmit={adicionarParticipante}>
      <input
        ref={inputRef}
        value={nome}
        type="text"
        placeholder="Insira os nomes dos participantes"
        onChange={(event) => setNome(event.target.value)}
      />
      <button disabled={!nome}>Adicionar</button>
      {mensagemErro && <p role="alert">{mensagemErro}</p>}
    </form>
  );
}
