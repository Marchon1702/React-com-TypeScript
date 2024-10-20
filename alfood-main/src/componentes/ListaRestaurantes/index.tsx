import axios, { AxiosRequestConfig } from "axios";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import { useEffect, useState } from "react";
import { IPaginacao } from "../../interfaces/IPaginacao";

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState<string>("");
  const [paginaAnterior, setPaginaAnterior] = useState<string>("");
  const [busca, setBusca] = useState<string>("");
  const [ordenacao, setOrdenacao] = useState<string>("");

  interface IParametrosBusca {
    ordering?: string;
    search?: string;
  }

  useEffect(() => {
    carregarDados("http://localhost:8000/api/v1/restaurantes/");
  }, []);

  const carregarDados = (url: string, opcoes: AxiosRequestConfig = {}) => {
    axios.get<IPaginacao<IRestaurante>>(url, opcoes).then((response) => {
      setRestaurantes(response.data.results);
      setProximaPagina(response.data.next);
      setPaginaAnterior(response.data.previous);
    });
  };

  const buscar = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const opcoes = {
      params: {} as IParametrosBusca,
    };

    if (busca) {
      opcoes.params.search = busca;
      carregarDados("http://localhost:8000/api/v1/restaurantes/", opcoes);
    }

    if(ordenacao) {
      opcoes.params.ordering = ordenacao
    }
  };

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      <form onSubmit={buscar}>
        <div>
          <input
            type="text"
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
          />
        </div>
        <div>
          <label htmlFor="select-ordenacao">Ordenação</label>
          <select
            name="select-ordenacao"
            id="select-ordenacao"
            value={ordenacao}
            onChange={(evento) => setOrdenacao(evento.target.value)}
          >
            <option value="">Padrão</option>
            <option value="id">Por ID</option>
            <option value="nome">Por Nome</option>
          </select>
        </div>
        <button type="submit">buscar</button>
      </form>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      <button
        onClick={() => carregarDados(paginaAnterior)}
        disabled={!paginaAnterior}
      >
        Página Anterior
      </button>
      <button
        onClick={() => carregarDados(proximaPagina)}
        disabled={!proximaPagina}
      >
        Próxima Página
      </button>
    </section>
  );
};

export default ListaRestaurantes;
