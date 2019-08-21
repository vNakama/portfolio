import React, {Component} from "react";
import "./styles.css";

class Imagem extends React.Component {
    render () {
        return (
            <>
            <div>
                <img className = "imgBorda" src = {this.props.imagem}/>
            </div>
            </>
        )
    }
}

export default Imagem;