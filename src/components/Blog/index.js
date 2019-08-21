import React, {Component} from "react";
import "./styles.css";

import Titulo from "../../components/Titulo";
import PostBlog from "../../components/PostBlog";

import img16 from "../../assets/16.jpg";
import img17 from "../../assets/17.jpeg";
import img19 from "../../assets/19.png";

const 
    post1 = {
        titulo: 'Realistic Watercolor',
        escritor: 'Celsys',
        data: '30 Mar 2019',
        texto: 'Em uma atualização do software Clip Studio Paint, a Celsys adicionou várias brushes que permitirão que o usuário crie quadros com um resultado muito mais realista que antes.',
        link: 'https://tips.clip-studio.com/en-us/articles/1514'
    },

    post2 = {
        titulo: 'Cyberpunk 2077',
        escritor: 'Charlie Hall',
        data: '17 Jun 2019',
        texto: 'Treiler de Cyberpunk 2077 é exibido na E3 2019 e revela detalhes sobre o universo construído para o game.',
        link: 'https://www.polygon.com/e3/2019/6/17/18681819/cyberpunk-2077-demo-impressions-e3-2019'
    },

    post3 = {
        titulo: 'Project Scarlett',
        escritor: 'Alan Bradley',
        data: '11 de Jun 2019',
        texto: 'Microsoft divulda sua nova geração de console na E3 e confirma que será laçado em 2020.',
        link: 'https://www.gamesradar.com/xbox-project-scarlett-release-date-specs-price-graphics-cloud/'
    }

    

class Blog extends React.Component {
    render () {
        return (
            <div id = "ancoraBlog" className = "blog">
                <Titulo>Blog</Titulo>
    
                <div className = "corpo">
                    <PostBlog {...post1} imagem = {img16}/>
                    <PostBlog {...post2} imagem = {img17}/>
                    <PostBlog {...post3} imagem = {img19}/>
                </div>
            </div>
        )
    }
}

export default Blog;