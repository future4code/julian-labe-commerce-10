import React from 'react'
import styled from 'styled-components'

/*Estilizacao dos componentes*/
const ContainerProduto = styled.div`
    width: 200px;
    height:250px;
    border: 1px solid black;
`

const UrlImagem = styled.img`
    max-width: 100%;
`

const ButtonAdicionaCarrinho = styled.button`
    width: 90%;
    padding: 0;
    margin: 0;
`
const TextoProduto = styled.p`
    padding: 0;
    margin: 0;
`
/*Estilizacao dos componentes*/


export class Home extends React.Component{
    render (){
        return (
            <ContainerProduto>
                <UrlImagem src={this.props.urlImagem}></UrlImagem>
                <TextoProduto><b>{this.props.item}</b></TextoProduto>
                <TextoProduto>{() => this.props.valor}</TextoProduto>
                <ButtonAdicionaCarrinho 
                onClick= {() => this.props.onFunction(this.props.produtoId)}>
                    Adicionar Carrinho</ButtonAdicionaCarrinho>
            </ContainerProduto>
        )
    
    }

}