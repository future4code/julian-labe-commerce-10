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
            id: Date.now(),
            name: "Enterprise",
            value: '10000.0',
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
                id: Date.now(),
            name: "Millenium Falcon",
            value: 90000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Tardis",
            value: 50000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Naves/Foguetes/Ônibus espaciais*/
  
  /*Produtos - Brinquedos e Produtos infantis temáticos*/
        {
            id: Date.now(),
            name: "Lego City - ônibus espacial (60226)",
            value: 450.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Lego Creator - Caminhão transportador (31091)",
            value: 320.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Lego Star Wars - Ônibus espacial do Kylo Ren (75256)",
            value: 500.0,
            imageUrl: "https://picsum.photos/200/150",
    },
  /*Produtos - Brinquedos e Produtos infantis temáticos*/
  
  /*Produtos - Meteoritos/Aerolitos com pedras preciosas*/
        {
            id: Date.now(),
            name: "Hobá West",
            value: 1000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Londranitos",
            value: 2000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Bendegó",
            value: 400000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Meteoritos/Aerolitos com pedras preciosas*/
  
  /*Produtos - Viagens Espaciais*/
        {
            id: Date.now(),
            name: "Sputinik 1",
            value: 5000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Vostok 1",
            value: 4000000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Mars Pathfinder",
            value: 300000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Viagens Espaciais*/
  
  /*Produtos - Camisetas divertidas*/
        {
            id: Date.now(),
            name: "Camiseta Nazaré Naza - Nasa",
            value: 50.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Camiseta Vaza, I need my space - Nasa",
            value: 40.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Galilei & Newton & Curie & Einstein & Hawking & eu",
            value: 55.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Camisetas divertidas*/
  
  /*Produtos - Roupas espaciais*/
        {
            id: Date.now(),
            name: "EMU",
            value: 550.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "MAG",
            value: 300.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "IDB",
            value: 600.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  /*Produtos - Roupas espaciais*/
  
  /*Produtos - Satélites Antigos*/
        {
            id: Date.now(),
            name: "Io",
            value: 55000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Europa",
            value: 30000.0,
            imageUrl: "https://picsum.photos/200/150",
        },
  
        {
            id: Date.now(),
            name: "Calisto",
            value: 600000.0,
            imageUrl: "https://picsum.photos/200/150",
        }
      ],
    carrinho:  [
        
    ]
    }

    
  /*Produtos - Satélites Antigos*/
    onAdicionarCarrinho = (produtoId) =>{
        const carrinho = this.state.arrayProdutos.map((produto) => {
            if(produtoId === produto.id){
                const novoItemCarrinho = {
                    
                }
                return novoItemCarrinho
            }
            
        })
        const novoCarrinho = [carrinho]
            this.setState({carrinho: novoCarrinho})
        
    }
    
    
    render (){
        const novoArray = this.state.arrayProdutos.map((produto) => {
            return(
                <Home 
                urlImagem = {produto.imageUrl} 
                item= {produto.name}
                valor= {produto.value}
                onFunction = {this.onAdicionarCarrinho}
                produto = {produto.id}
                />

            )
        })
        return (
            <PaginaInicial>
                <ContainerProdutos>
                    {novoArray}
                </ContainerProdutos>
                <Carrinho nomeProduto= {this.state.carrinho}/>
            </PaginaInicial>
        )
    }
}

export default App;
