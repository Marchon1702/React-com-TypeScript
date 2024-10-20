import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");
  
  const parametros = useParams()
  useEffect(() => {
    if(parametros.id) {
      axios.get<IRestaurante>(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`)
      .then( response => {
        setNomeRestaurante(response.data.nome)
      })
    }
  }, [parametros.id])

  const aoSubmeter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if(parametros.id) {
      axios.put(`http://localhost:8000/api/v2/restaurantes/${parametros.id}/`, {nome: nomeRestaurante})
    } else {
      axios.post('http://localhost:8000/api/v2/restaurantes/', {nome: nomeRestaurante})
    }
    setNomeRestaurante("")
  };

  return (
    <form onSubmit={aoSubmeter}>
      <TextField
        value={nomeRestaurante}
        onChange={(e) => setNomeRestaurante(e.target.value)}
        id="standard-basic"
        label="Nome do Restaurante"
        variant="standard"
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurante;
