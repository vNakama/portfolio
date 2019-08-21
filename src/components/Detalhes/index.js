import React from "react";
import "./styles.css";

import Interesse from "../../components/Interesse";   
import Imagem from "../../components/Imagem";

import img from '../../assets/perfil.png';
import img1 from '../../assets/1.png';
import pdf from '../../assets/curriculum-vitae.pdf';
import Botao from "../Botao";

const 
    interesses = {
        titulo: 'Interesses',
        lista: [
            'Arte',
            'Mídias interativas'
        ]
    },
    
    idiomas = {
        titulo: "Idiomas",
        lista: [
            'Português - Nativo',
            'Inglês - Avançado'
        ]
    },
    
    formacao = {
        titulo: 'Formação',
        lista: [
            '2020/UTFPR - Engenharia de Software'
        ]
    },

    atividades = {
        titulo: 'Atividades',
        lista: [
            'Criação de arte para videogames'
        ]
    }

class Detalhes extends React.Component {
    render () {
        return (
            <div id = "ancoraInicio" className = "detalhes">
                <div className = "esquerda img1">
                    <img className = "img1" src = {img1}/>
                </div>
                <div className = "direita">
                    <div className = "foto">
                        <Imagem imagem={img}/>
                    </div>
                    <div className = "miniBiografia">
                        Sou Vítor Seigi Shiruo Nakama, atualmente estudando os fundamentos da arte para implementá-la em diferentes mídias
                    </div>
    
                    <div className = "interesses">
                        <Interesse {...interesses}/>
                        <Interesse {...idiomas}/>
                        <Interesse {...formacao}/>
                        <Interesse {...atividades}/>
                    </div>
    
                    <div className = "donwload">
                        <Botao link = {pdf}>DOWNLOAD</Botao>
                    </div>
                </div>
            </div>
        );  
    }
};

export default Detalhes;