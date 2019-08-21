import React, {Component} from "react";
import "./styles.css";

class Informacao extends React.Component {
    render () {
        return (
            <div className = "informacaoA">
                <div className = "nomeInfo">{this.props.titulo}</div>

                <div className = "textoInfoE">
                    {this.props.texto}
                </div>
            </div>
        )
    }
}

export default Informacao;