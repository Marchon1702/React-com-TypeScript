"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InsertTaskArea;
const jsx_runtime_1 = require("react/jsx-runtime");
const fa6_1 = require("react-icons/fa6");
function InsertTaskArea() {
    return ((0, jsx_runtime_1.jsxs)("form", { className: "insertTaskArea", children: [(0, jsx_runtime_1.jsxs)("div", { className: "textArea", children: [(0, jsx_runtime_1.jsx)("label", { htmlFor: "addTask", children: "Adicionar Tarefa" }), (0, jsx_runtime_1.jsx)("input", { type: "text", id: "addTask", placeholder: "Digite sua tarefa aqui..." })] }), (0, jsx_runtime_1.jsxs)("div", { className: "radioArea", children: [(0, jsx_runtime_1.jsxs)("label", { htmlFor: "addPriority-low", children: ["Baixa ", (0, jsx_runtime_1.jsx)(fa6_1.FaArrowDown, {})] }), (0, jsx_runtime_1.jsx)("input", { type: "radio", id: "addPriority-low", name: "priority" }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: "addPriority-medium", children: ["Media ", (0, jsx_runtime_1.jsx)(fa6_1.FaArrowRight, {})] }), (0, jsx_runtime_1.jsx)("input", { type: "radio", id: "addPriority-medium", name: "priority" }), (0, jsx_runtime_1.jsxs)("label", { htmlFor: "addPriority-high", children: ["Alta ", (0, jsx_runtime_1.jsx)(fa6_1.FaArrowUp, {})] }), (0, jsx_runtime_1.jsx)("input", { type: "radio", id: "addPriority-high", name: "priority" })] }), (0, jsx_runtime_1.jsx)("button", { type: "submit", className: "btnAdicionar", children: "Enviar" })] }));
}
