import React, {Component} from "react";
import "./styles.css";

class Ancora extends React.Component {
    render () {
        return (
            <a className = "botao" href = {this.props.ancora}>
                {this.props.children}
            </a>
        )
    }
}

export default Ancora;