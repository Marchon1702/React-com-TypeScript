"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Botao.css");
const Botao = ({ children }) => {
    return (0, jsx_runtime_1.jsx)("button", { className: "botao", children: children });
};
exports.default = Botao;
