import React, {Component} from "react";
import "./styles.css"

class Titulo extends Component {
    render () {
        return (
            <div className = "titulo">{this.props.children}</div>
        )
    }
}

export default Titulo;