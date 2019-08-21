import React from "react";
import "./styles.css";
import Ancora from "../Ancora";

const Cabecalho = () => {
    return (
        <div class = "cabeçalho">
            <div class = "nome">Vitor Nakama</div>

            <div class = "ancoras">
                <Ancora ancora = "#ancoraInicio">INÍCIO</Ancora>
                <Ancora ancora = "#ancoraHabilidades">HABILIDADES</Ancora>
                <Ancora ancora = "#ancoraBlog">BLOG</Ancora>
                <Ancora ancora = "#ancoraPortfolio">PORTFÓLIO</Ancora>
                <Ancora ancora = "#ancoraInformacoes">INFORMAÇÕES</Ancora>
                <Ancora ancora = "#ancoraContato">CONTATO</Ancora>
            </div>
        </div>
    )
};

export default Cabecalho;