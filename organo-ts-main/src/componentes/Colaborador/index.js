"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Colaborador.css");
const Colaborador = ({ nome, cargo, imagem, data, corDeFundo }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'colaborador', children: [(0, jsx_runtime_1.jsx)("div", { className: 'cabecalho', style: { backgroundColor: corDeFundo }, children: (0, jsx_runtime_1.jsx)("img", { src: imagem, alt: nome }) }), (0, jsx_runtime_1.jsxs)("div", { className: 'rodape', children: [(0, jsx_runtime_1.jsx)("h4", { children: nome }), (0, jsx_runtime_1.jsx)("h5", { children: cargo }), (0, jsx_runtime_1.jsx)("h5", { children: new Date(data).toLocaleDateString() })] })] }));
};
exports.default = Colaborador;
