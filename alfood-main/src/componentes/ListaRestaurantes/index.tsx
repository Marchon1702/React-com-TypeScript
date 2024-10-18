import axios from "axios";
import IRestaurante from "../../interfaces/IRestaurante";
import style from "./ListaRestaurantes.module.scss";
import Restaurante from "./Restaurante";
import { useEffect, useState } from "react";
import { IPaginacao } from "../../interfaces/IPaginacao";

const ListaRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [proximaPagina, setProximaPagina] = useState<string>("");

  useEffect(() => {
    axios
      .get<IPaginacao<IRestaurante>>(
        " http://localhost:8000/api/v1/restaurantes/"
      )
      .then((response) => {
        setRestaurantes(response.data.results);
        setProximaPagina(response.data.next);
        })
  }, []);

  const verMais = () => {
    axios.get<IPaginacao<IRestaurante>>(`${proximaPagina}`).then((response) => {
      setRestaurantes((prevRestaurantes) => [
        ...prevRestaurantes,
        ...response.data.results,
      ]);
      setProximaPagina(response.data.next);
    });
  };

  return (
    <section className={style.ListaRestaurantes}>
      <h1>
        Os restaurantes mais <em>bacanas</em>!
      </h1>
      {restaurantes?.map((item) => (
        <Restaurante restaurante={item} key={item.id} />
      ))}
      {proximaPagina && <button onClick={verMais}>Ver Mais</button>}
    </section>
  );
};

export default ListaRestaurantes;
