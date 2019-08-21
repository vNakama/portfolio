import React, {Component} from 'react';
import './styles.css';

class HabilidadeA extends Component {
    render () {
        return (
            <>
            <div className = "habilidade">
                <div className = "nomeCategoria">
                   <div className = "corNome">{this.props.titulo}</div>
                </div>

                <div className = "os3">
                    <img className = "tamanhoImg" src = {this.props.imagem1}/>
                    <img className = "tamanhoImg" src = {this.props.imagem2}/>
                    <img className = "tamanhoImg" src = {this.props.imagem3}/>
                </div>
            </div>
            </>
        )
    }
}

export default HabilidadeA;