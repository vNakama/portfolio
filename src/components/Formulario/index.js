import React, {Component} from "react";
import "./styles.css";

import Titulo from "../../components/Titulo";

import img16 from '../../assets/16.png';
import img17 from '../../assets/17.png';
import img18 from '../../assets/18.png';

class Formulario extends React.Component {
    render () {
        return (
            <div id = "ancoraContato" className = "formulario">
                <Titulo>Contato</Titulo>
                <div className = "corpoForm">
                    <div className = "formEsquerda">
                        <div className = "contatoText">
                            Entre em contato ou me encontre nas redes sociais
                        </div>

                        <div className = "redesSociais">
                            <a href = "https://www.instagram.com/vitornakama">
                                <img className = "icone" src = {img16}/>
                            </a>
                        
                            <a href = "https://github.com/vNakama">
                                <img className = "icone" src = {img17}/>
                            </a>
                           
                            <a href = "https://www.deviantart.com/vitorseigi15">
                                <img className = "icone" src = {img18}/>
                            </a>
                        </div>                        
                    </div>

                    <div className = "formDireita">
                        <form className = "formA" action="https://formspree.io/vitorshiruo@gmail.com" method="POST">
                            <input  type = "text" className = "inputs" placeholder = "Nome" name = "Nome"/>
                            <div className = "campos"/>
                            <input type = "email" className = "inputs" placeholder = "Email" name = "Email"/>
                            <div className = "campos"/>
                            <input type = "text" className = "inputs" placeholder = "Assunto" name = "Assunto"/>
                            <div className = "campos"/>
                            <textarea className = "inputArea" rows = "3" placeholder = "Mensagem" name = "Mensagem"/>
                            <div className = "enviar">
                            <input className = "semForm" type="submit" value="ENVIAR"/>
                            </div>
                        </form> 
                    </div>
                </div>                

            </div>
        )
    }
}

export default Formulario;