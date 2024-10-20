import { useEffect, useState } from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { Link } from "react-router-dom";
import IPrato from "../../../interfaces/IPrato";
import http from "../../../http";

const AdministracaoPratos = () => {
  const [pratos, setPratos] = useState<IPrato[]>([]);

  useEffect(() => {
    http.get<IPrato[]>("pratos/").then((response) => {
      setPratos(response.data);
    });
  }, []);

  const excluir = (pratoAhExcluir: IPrato) => {
    http.delete(`http://localhost:8000/api/v2/pratos/${pratoAhExcluir.id}/`)
      .then(() => {
        const listaPratos = pratos.filter(restaurante => restaurante.id !== pratoAhExcluir.id)
        setPratos([...listaPratos])
      })
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Imagem</TableCell>
            <TableCell>Editar</TableCell>
            <TableCell>Excluir</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pratos.map((prato) => (
            <TableRow key={prato.id}>
              <TableCell>{prato.nome}</TableCell>
              <TableCell>{prato.tag}</TableCell>
              <TableCell>
                <a href={prato.imagem} target="blank" rel="noreferrer"> [ Ver Imagem ] </a>
              </TableCell>
              <TableCell>
                <Link to={`${prato.id}`}>[ Editar ]</Link> 
              </TableCell>
              <TableCell>
                <Button variant="outlined" color="error" onClick={() => excluir(prato)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdministracaoPratos;
