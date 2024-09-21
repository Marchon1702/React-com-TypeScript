"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("./ListaSuspensa.css");
const ListaSuspensa = ({ aoAlterado, itens, label, obrigatorio, valor }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: 'lista-suspensa', children: [(0, jsx_runtime_1.jsx)("label", { children: label }), (0, jsx_runtime_1.jsxs)("select", { onChange: evento => aoAlterado(evento.target.value), required: obrigatorio, value: valor, children: [(0, jsx_runtime_1.jsx)("option", { value: "" }), itens.map(item => {
                        return (0, jsx_runtime_1.jsx)("option", { children: item }, item);
                    })] })] }));
};
exports.default = ListaSuspensa;
