import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import http from "../../../http";
import ITag from "../../../interfaces/ITag";
import IRestaurante from "../../../interfaces/IRestaurante";
import { useParams } from "react-router-dom";
import IPrato from "../../../interfaces/IPrato";

const FormularioPratos = () => {
  const [nomePrato, setNomePrato] = useState("");
  const [descricao, setDescricao] = useState("");
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<ITag[]>([]);
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState("");
  const [imagem, setImagem] = useState<File | null>(null);

  const parametros = useParams();

  useEffect(() => {
    http
      .get<{ tags: ITag[] }>("tags/")
      .then((response) => setTags(response.data.tags));
    http
      .get<IRestaurante[]>("restaurantes/")
      .then((response) => setRestaurantes(response.data));
  }, []);

  useEffect(() => {
    if (parametros.id) {
      http.get(`pratos/${parametros.id}/`).then((response) => {
        setNomePrato(response.data.nome);
        setDescricao(response.data.descricao);
        setTag(response.data.tag);
        setRestaurante(response.data.restaurante);
      });
    }
  }, [parametros.id]);

  const adicionarArquivo = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      console.log(event.target.files);
      setImagem(event.target.files[0]);
    } else {
      setImagem(null);
    }
  };

  const aoSubmeter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("nome", nomePrato);
    formData.append("descricao", descricao);
    formData.append("tag", tag);
    formData.append("restaurante", restaurante);

    if (imagem) formData.append("imagem", imagem);

    if (parametros.id) {
      http.request({
        url: `pratos/${parametros.id}/`,
        method: "PUT",
        headers: {
          "Content-Type": "multi-part/form-data",
        },
        data: formData,
      })
        .then(() => alert('Prato Editado com Sucesso!'))
    } else {
      http
        .request({
          url: "/pratos/",
          method: "POST",
          headers: {
            "Content-Type": "multi-part/form-data",
          },
          data: formData,
        })
        .then(() => {
          alert("Prato Cadastrado com sucesso!");
          setDescricao("");
          setImagem(null);
          setNomePrato("");
          setRestaurante("");
          setTag("");
        })
        .catch((error) => console.log(error));
    }
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
        Formulário de Pratos
      </Typography>
      <Box component="form" sx={{ width: "100%" }} onSubmit={aoSubmeter}>
        <TextField
          value={nomePrato}
          onChange={(e) => setNomePrato(e.target.value)}
          label="Nome do Prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <TextField
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          label="Descrição do Prato"
          variant="standard"
          fullWidth
          required
          margin="dense"
        />
        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-tag">Tag</InputLabel>
          <Select
            labelId="select-tag"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl margin="dense" fullWidth>
          <InputLabel id="select-restaurante">restaurante</InputLabel>
          <Select
            labelId="select-restaurante"
            value={restaurante}
            onChange={(event) => setRestaurante(event.target.value)}
          >
            {restaurantes.map((restaurante) => (
              <MenuItem key={restaurante.id} value={restaurante.id}>
                {restaurante.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <input type="file" onChange={adicionarArquivo} />
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

export default FormularioPratos;
