import React, {Component} from "react";
import "./styles.css";

class Projeto extends React.Component {
    render () {
        return (
            <>
                <div className = "projeto">
                    <div className = "projetoNome">{this.props.children}</div>

                    <img className = "projetoTamanho" src = {this.props.imagem}/>
                </div>
            </>
        )
    }
}

export default Projeto;

