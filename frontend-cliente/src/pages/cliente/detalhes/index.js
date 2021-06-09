import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';
 
export default class Produto extends Component {
    state = {
        produto: {},
    };
 
    componentDidMount() {
        const { id } = this.props.match.params;
 
        fetch(`https://db-prova-1.herokuapp.com/produto/${id}`)
            .then(produto =>
                produto.json().then(produto => this.setState({ produto }))
            )
            .catch(erro => this.setState({ erro }));
    }
 
    render() {
        const { produto, index } = this.state;
 
        if (produto.ativo) {
            produto.ativo = "Cliente Ativo";
        } else {
            produto.ativo = "Cliente Inativo";
        }
 
        return (
            <div className="cliente-info">
                <h1> {produto.nome} </h1>
                <h1> {produto.descricao} </h1>
                <h1> {produto.preco} </h1>
                <h1> {produto.estoque} </h1>
                <br />
                <Link to={`/produtos`}> Voltar </Link> <br />
                <Link to={`/editarProdutos/${produto.id}`}> Editar </Link> <br />
                <Link to={`/deletarProdutos/${produto.id}`}> Deletar </Link> <br />
            </div >
        );
    }
}
