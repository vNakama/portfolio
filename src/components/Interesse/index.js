import React from "react";
import "./styles.css"

class Interesse extends React.Component {
    render () {
        return (
            <>
            <div className = "a1">{this.props.titulo}</div>

            {this.props.lista.map ((element) => {
                return <div className = "a2">{element}</div>
            })}
            </>
        )
    }
}

export default Interesse;