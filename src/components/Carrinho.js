import React from 'react'
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    width: 27vw;
`

export class Carrinho extends React.Component{
    render(){
        return(
            <ContainerCarrinho>
                <p>{this.props.nomeProduto}</p>
                <p>X</p>
            </ContainerCarrinho>
        )
    }
}