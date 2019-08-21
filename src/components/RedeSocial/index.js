import React, {Component} from "react";
import "./styles.css";

import Imagem from "../../components/Imagem";


class RedeSocial extends React.Component {
    render () {
        return (
            <Imagem {...this.propos.imagem}/>
        )
    }
}

export default RedeSocial;