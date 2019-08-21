import React from "react";
import "./styles.css";
import Titulo from "../Titulo";
import HabilidadeA from "../HabilidadeA";

import imagem1 from '../../assets/imagem.jpg';

import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';
import img9 from '../../assets/9.png';
import img10 from '../../assets/10.png';
import img11 from '../../assets/11.png';
import img12 from '../../assets/12.png';
import img13 from '../../assets/13.png';
import img21 from '../../assets/21.png';
import img22 from '../../assets/22.png';
import img23 from '../../assets/23.png';

const 
    concept = {
        titulo: 'CONCEPT ART',
    },

    background = {
        titulo: 'Background'
    },
    character = {
        titulo: 'Character Design'
    },
    painting = {
        titulo: 'Painting'
    },
    vector = {
        titulo: 'Vector'
    }

const Habilidades = () => {
    return (
        <>
            <div id = "ancoraHabilidades" className = "habilidades">
                <Titulo>Habilidades</Titulo>

                <div className = "corpoH">
                    <HabilidadeA {...concept} imagem1={img2} imagem2={img3} imagem3={img4}/>
                    <HabilidadeA {...background} imagem1={img5} imagem2={img6} imagem3={img7}/>
                    <HabilidadeA {...character} imagem1={img8} imagem2={img9} imagem3={img10}/>
                    <HabilidadeA {...painting} imagem1={img11} imagem2={img12} imagem3={img13}/>
                    <HabilidadeA {...vector} imagem1={img21} imagem2={img22} imagem3={img23}/>
                </div>
            </div>
        </>
    )
}

export default Habilidades;