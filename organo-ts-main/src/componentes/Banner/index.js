"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banner = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./Banner.css");
const Banner = ({ enderecoImagem, textoAlternativo }) => {
    // JSX
    return ((0, jsx_runtime_1.jsx)("header", { className: "banner", children: (0, jsx_runtime_1.jsx)("img", { src: enderecoImagem, alt: textoAlternativo }) }));
};
exports.Banner = Banner;
exports.default = exports.Banner;
