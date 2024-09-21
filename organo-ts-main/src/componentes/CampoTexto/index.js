"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./CampoTexto.css");
const CampoTexto = ({ placeholder, aoAlterado, label, valor, obrigatorio = false, tipo = 'text' }) => {
    const placeholderModificada = `${placeholder}...`;
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "campo-texto", children: [(0, jsx_runtime_1.jsx)("label", { children: label }), (0, jsx_runtime_1.jsx)("input", { value: valor, onChange: aoDigitado, required: obrigatorio, placeholder: placeholderModificada, type: tipo })] }));
};
exports.default = CampoTexto;
