import React, {Component} from "react";
import "./styles.css";
import Cabecalho from "../../components/Cabecalho";
import Detalhes from "../../components/Detalhes";
import Habilidades from "../../components/Habilidades";
import Blog from "../../components/Blog";
import Portfolio from "../../components/Portfolio";
import MaisInfos from "../../components/MaisInfos";
import Formulario from "../../components/Formulario";
import Rodape from "../../components/Rodape";

class Main extends Component {
    render () {
        return (
            <>
               <Cabecalho/>
               <Detalhes/>
               <Habilidades/>
               <Blog/>
               <Portfolio/>
               <MaisInfos/>
               <Formulario/>
               <Rodape/>
            </>
        );
    }
}

export default Main;