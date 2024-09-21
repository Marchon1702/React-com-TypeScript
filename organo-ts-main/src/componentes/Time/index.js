"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Colaborador_1 = __importDefault(require("../Colaborador"));
require("./Time.css");
const Time = ({ corPrimaria, corSecundaria, nome, colaboradores, }) => {
    const css = { backgroundColor: corSecundaria };
    return ((0, jsx_runtime_1.jsxs)("section", { className: "time", style: css, children: [(0, jsx_runtime_1.jsx)("h3", { style: { borderColor: corPrimaria }, children: nome }), (0, jsx_runtime_1.jsx)("div", { className: "colaboradores", children: colaboradores.map((colaborador) => ((0, jsx_runtime_1.jsx)(Colaborador_1.default, { corDeFundo: corPrimaria, nome: colaborador.nome, cargo: colaborador.cargo, imagem: colaborador.imagem, data: colaborador.data }, colaborador.nome))) })] }));
};
exports.default = Time;
