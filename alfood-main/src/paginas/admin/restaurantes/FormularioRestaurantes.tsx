import {
  Box,
  Button, TextField, Typography
} from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import IRestaurante from "../../../interfaces/IRestaurante";
import http from "../../../http";

const FormularioRestaurante = () => {
  const [nomeRestaurante, setNomeRestaurante] = useState("");

  const parametros = useParams();
  useEffect(() => {
    if (parametros.id) {
      http
        .get<IRestaurante>(`restaurantes/${parametros.id}/`)
        .then((response) => {
          setNomeRestaurante(response.data.nome);
        });
    }
  }, [parametros.id]);

  const aoSubmeter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (parametros.id) {
      http.put(`restaurantes/${parametros.id}/`, {
        nome: nomeRestaurante,
      });
    } else {
      http.post("restaurantes/", {
        nome: nomeRestaurante,
      });
    }
    setNomeRestaurante("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Typography component="h1" variant="h6">
        {" "}
        Formulário de Restaurantes
      </Typography>
      <Box component="form" sx={{ width: "100%" }} onSubmit={aoSubmeter}>
        <TextField
          value={nomeRestaurante}
          onChange={(e) => setNomeRestaurante(e.target.value)}
          id="standard-basic"
          label="Nome do Restaurante"
          variant="standard"
          fullWidth
          required
        />
        <Button
          sx={{ marginTop: 2 }}
          type="submit"
          variant="outlined"
          fullWidth
        >
          Salvar
        </Button>
      </Box>
    </Box>
  );
};

export default FormularioRestaurante;
