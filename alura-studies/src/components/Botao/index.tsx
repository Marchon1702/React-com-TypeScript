import React from "react";
import style from './botao.module.scss';

export default class Botao extends React.Component {
    render() {
        return <button className={style.botao}>Botão</button>
    }
}