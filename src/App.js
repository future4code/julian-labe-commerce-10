import React from 'react';
import './App.css';
import styled from 'styled-components'
import {Home} from './components/Home'
import {Carrinho} from './components/Carrinho'


const PaginaInicial = styled.div`
    display: flex;
`
const ContainerProdutos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 60vw;
`

/*Produtos - Naves/Foguetes/Ônibus espaciais*/



class App extends React.Component{
  state = {
    arrayProdutos: [
       {
            id: 1,
            name: "Enterprise",
            value: '10000.0',
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
                id: 2,
            name: "Millenium Falcon",
            value: 90000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 3,
            name: "Tardis",
            value: 50000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Naves/Foguetes/Ônibus espaciais*/
  
  /*Produtos - Brinquedos e Produtos infantis temáticos*/
        {
            id: 4,
            name: "Lego City - ônibus espacial (60226)",
            value: 450.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 5,
            name: "Lego Creator - Caminhão transportador (31091)",
            value: 320.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 6,
            name: "Lego Star Wars - Ônibus espacial do Kylo Ren (75256)",
            value: 500.0,
            imageUrl: "https://picsum.photos/200/150",
    },
  /*Produtos - Brinquedos e Produtos infantis temáticos*/
  
  /*Produtos - Meteoritos/Aerolitos com pedras preciosas*/
        {
            id: 7,
            name: "Hobá West",
            value: 1000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 8,
            name: "Londranitos",
            value: 2000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 9,
            name: "Bendegó",
            value: 400000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Meteoritos/Aerolitos com pedras preciosas*/
  
  /*Produtos - Viagens Espaciais*/
        {
            id: 10,
            name: "Sputinik 1",
            value: 5000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 11,
            name: "Vostok 1",
            value: 4000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 12,
            name: "Mars Pathfinder",
            value: 300000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Viagens Espaciais*/
  
  /*Produtos - Camisetas divertidas*/
        {
            id: 13,
            name: "Camiseta Nazaré Naza - Nasa",
            value: 50.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 14,
            name: "Camiseta Vaza, I need my space - Nasa",
            value: 40.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 15,
            name: "Galilei & Newton & Curie & Einstein & Hawking & eu",
            value: 55.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Camisetas divertidas*/
  
  /*Produtos - Roupas espaciais*/
        {
            id: 16,
            name: "EMU",
            value: 550.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 17,
            name: "MAG",
            value: 300.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 18,
            name: "IDB",
            value: 600.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Roupas espaciais*/
  
  /*Produtos - Satélites Antigos*/
        {
            id: 19,
            name: "Io",
            value: 55000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 20,
            name: "Europa",
            value: 30000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: 21,
            name: "Calisto",
            value: 600000.0,
            imageUrl: "https://picsum.photos/200/150",
        }
      ],
    carrinho: []
    }

    
  /*Produtos - Satélites Antigos*/
    onAdicionarCarrinho = (produtoId) =>{
        const listaCarrinho = this.state.arrayProdutos.find((produto)=>{
            if(produtoId === produto.id){
                return produto
            }
        
        })
        const carrinhoItens = [listaCarrinho, ...this.state.carrinho]

        this.setState({carrinho: carrinhoItens})
        
    }
    componentDidUpdate(){
        console.log(this.state.carrinho)
    }
    
    render (){
        const novoArray = this.state.arrayProdutos.map((produto) => {
            return(
                <Home 
                urlImagem = {produto.imageUrl} 
                item= {produto.name}
                valor= {produto.value}
                onFunction = {this.onAdicionarCarrinho}
                produtoId = {produto.id}
                />

            )
        })
        return (
            <PaginaInicial>
                <ContainerProdutos>
                    {novoArray}
                </ContainerProdutos>
                <Carrinho produto={this.state.carrinho}/>
            </PaginaInicial>
        )
    }
}

export default App;
