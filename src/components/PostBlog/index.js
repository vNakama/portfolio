import React, {Component} from "react";
import "./styles.css";
import Botao from "../Botao";

class PostBlog extends React.Component {
    render () {
        return (
            <div>
                <div className = "post">
                    <img className = "imgPost" src = {this.props. imagem}/>

                <div className = "nomePost">{this.props.titulo}</div>
        
                    <div className = "corpoPost">
                        por {this.props.escritor} | {this.props.data}

                        <div className = "textoPost">
                            {this.props.texto}
                        </div>
                    </div>              
                </div>

                <div className = "botaoPost">
                    
                        <Botao link = {this.props.link}>LEIA MAIS</Botao>
                    
                </div>  
            </div>
        )
    }
 
}

export default PostBlog;