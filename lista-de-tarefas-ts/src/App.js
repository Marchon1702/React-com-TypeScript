"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const InsertTaskArea_1 = __importDefault(require("./components/InsertTaskArea"));
const PageTitle_1 = __importDefault(require("./components/PageTitle"));
function App() {
    return ((0, jsx_runtime_1.jsx)("div", { className: "App", children: (0, jsx_runtime_1.jsxs)("header", { children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, {}), (0, jsx_runtime_1.jsx)(InsertTaskArea_1.default, {})] }) }));
}
exports.default = App;
