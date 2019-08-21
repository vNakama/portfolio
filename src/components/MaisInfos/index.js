import React from "react";
import "./styles.css";

import Titulo from "../Titulo";
import Informacao from "../Informacao";

const
    info1 = {
        titulo: 'BIOGRAFIA',
        texto: 'Em 2015 participei do ICONIC, 1º Congresso de animação e concept art do Brasil, onde iniciei meus estudos sobre arte. Foi apartir desse evento que cemecei a me interessar pela área, entretanto, seria preciso de mais se eu quisesse trabalhar com arte. Em 2016 iniciei o curso de Engenharia de Software na Universidade Tecnológico Federal do Paraná, o que acabou prejudicando meus estudos. Foi só em 2018 que eu tive a oportunidade de entrar como aprendiz em um pequeno estúdio de jogos em Cornélio Procópio, onde trabalhei em um projeto e ganhei muita experiência.'
    },

    info2 = {
        titulo: 'PROFISSÃO',
        texto: 'Depois de alguns anos em contato com a arte, consigo notar como a indústria carece de inovações e profissionais que se disponham a aprender algo novo. Apesar de reconhecer que as os fundamentos da arte servem como alicerce principal no processo de criação, acredito que o artista deveria ser capaz de se utilizar da criatividade para apresentar algo novo ao mundo. Depois de 1 ano trabalhando na área, obtive mais liberdade para criar e desenvolver novas ideias, sendo isso, um dos meus princípios. Atualmente estou estudando também a parte de codificação dos videogames, para compreender melhor o ambiente em que minha arte será inserida e, assim, encontrar melhores formas de integrá-la.'
    }

class MaisInfos extends React.Component {
    render () {
        return (
            <div id = "ancoraInformacoes" className = "maisInfos">
                <Titulo>Mais Informações</Titulo>
    
                <div className = "corpo">
                    <Informacao {...info1}/>
                    <Informacao {...info2}/>
                </div>
            </div>
        )
    }
}

export default MaisInfos;