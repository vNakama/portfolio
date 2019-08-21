import React from "react";
import "./styles.css";

class Botao extends React.Component {
    render () {
        return (
            <>
            <a className = "formatoBotao" href = {this.props.link}>{this.props.children}</a>
            </>
        )
    }
};

export default Botao;