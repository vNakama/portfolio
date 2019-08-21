import React, {Component} from "react";
import "./styles.css";

import Titulo from "../Titulo";
import Projeto from "../Projeto";

import img14 from "../../assets/14.png";
import img15 from "../../assets/15.png";

class Portfolio extends React.Component {
    render () {
        return (
            <div id = "ancoraPortfolio" className = "portfolio">
                <Titulo>Portfólio</Titulo>
    
                <div className = "corpoP">
                    <Projeto imagem = {img14}>DINO EVOLUTION</Projeto>
                    <Projeto imagem = {img15}>EM BREVE...</Projeto>
                </div>
            </div>
        )
    }
}

export default Portfolio;