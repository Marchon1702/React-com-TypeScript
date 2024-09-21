"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Formulario_1 = __importDefault(require("./componentes/Formulario"));
const Time_1 = __importDefault(require("./componentes/Time"));
const Banner_1 = __importDefault(require("./componentes/Banner"));
function App() {
    const times = [
        {
            nome: "Programação",
            corPrimaria: "#57C278",
            corSecundaria: "#D9F7E9",
        },
        {
            nome: "Front-End",
            corPrimaria: "#82CFFA",
            corSecundaria: "#E8F8FF",
        },
        {
            nome: "Data Science",
            corPrimaria: "#A6D157",
            corSecundaria: "#F0F8E2",
        },
        {
            nome: "Devops",
            corPrimaria: "#E06B69",
            corSecundaria: "#FDE7E8",
        },
        {
            nome: "UX e Design",
            corPrimaria: "#DB6EBF",
            corSecundaria: "#FAE9F5",
        },
        {
            nome: "Mobile",
            corPrimaria: "#FFBA05",
            corSecundaria: "#FFF5D9",
        },
        {
            nome: "Inovação e Gestão",
            corPrimaria: "#FF8A29",
            corSecundaria: "#FFEEDF",
        },
    ];
    const [colaboradores, setColaboradores] = (0, react_1.useState)([]);
    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "App", children: [(0, jsx_runtime_1.jsx)(Banner_1.default, { enderecoImagem: "/imagens/banner.png", textoAlternativo: "O banner principal da p\u00E1gina do Organo" }), (0, jsx_runtime_1.jsx)(Formulario_1.default, { times: times.map((time) => time.nome), aoColaboradorCadastrado: (colaborador) => aoNovoColaboradorAdicionado(colaborador) }), times.map((time) => {
                if (colaboradores.length <= 0)
                    return null;
                const temColaborador = colaboradores.some(colaborador => colaborador.time === time.nome);
                console.log(temColaborador);
                if (!temColaborador)
                    return null;
                return ((0, jsx_runtime_1.jsx)(Time_1.default, { nome: time.nome, corPrimaria: time.corPrimaria, corSecundaria: time.corSecundaria, colaboradores: colaboradores.filter((colaborador) => colaborador.time === time.nome) }, time.nome));
            }), ";"] }));
}
exports.default = App;
