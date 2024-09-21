"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Botao_1 = __importDefault(require("../Botao"));
const CampoTexto_1 = __importDefault(require("../CampoTexto"));
const ListaSuspensa_1 = __importDefault(require("../ListaSuspensa"));
require("./Formulario.css");
const Formulario = ({ aoColaboradorCadastrado, times }) => {
    const [nome, setNome] = (0, react_1.useState)("");
    const [cargo, setCargo] = (0, react_1.useState)("");
    const [imagem, setImagem] = (0, react_1.useState)("");
    const [time, setTime] = (0, react_1.useState)("");
    const [data, setData] = (0, react_1.useState)("");
    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        });
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
        setData("");
    };
    return ((0, jsx_runtime_1.jsx)("section", { className: "formulario", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: aoSalvar, children: [(0, jsx_runtime_1.jsx)("h2", { children: "Preencha os dados para criar o card do colaborador" }), (0, jsx_runtime_1.jsx)(CampoTexto_1.default, { obrigatorio: true, label: "Nome", placeholder: "Digite seu nome", valor: nome, aoAlterado: (valor) => setNome(valor) }), (0, jsx_runtime_1.jsx)(CampoTexto_1.default, { obrigatorio: true, label: "Cargo", placeholder: "Digite seu cargo", valor: cargo, aoAlterado: (valor) => setCargo(valor) }), (0, jsx_runtime_1.jsx)(CampoTexto_1.default, { label: "Imagem", placeholder: "Digite o endere\u00E7o da imagem", valor: imagem, aoAlterado: (valor) => setImagem(valor) }), (0, jsx_runtime_1.jsx)(CampoTexto_1.default, { label: "Data de Integra\u00E7\u00E3o", placeholder: "", valor: data, aoAlterado: (valor) => setData(valor), tipo: "date" }), (0, jsx_runtime_1.jsx)(ListaSuspensa_1.default, { obrigatorio: true, label: "Time", itens: times, valor: time, aoAlterado: (valor) => setTime(valor) }), (0, jsx_runtime_1.jsx)(Botao_1.default, { children: "Criar Card" })] }) }));
};
exports.default = Formulario;
