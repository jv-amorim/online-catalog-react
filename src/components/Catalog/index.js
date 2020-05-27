import React from 'react';
import Product from '../Product';
import Cart from '../Cart';
import productsData from '../../data/products.json';
import { ShoppingCart } from 'react-feather';
import './stylesheet.css';

function CatalogHeader(props) {
    return (
        <header>
            <h1 className="title">Catálogo Online</h1>
            <button id="shopping-cart-button" onClick={props.onClick}>
                <ShoppingCart color="white" size={20} />
            </button>
        </header>
    );
}

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.products = productsData;
        this.state = {
            amount: Array(productsData.length).fill(0)
        };
    }
    
    handleClick(i) {
        const newValues = this.state.amount.slice();
        newValues[i]++;

        this.setState({
            amount: newValues
        });
    }
    
    handleOpenCart() {
        const cart = document.getElementById('cart-panel');
        cart.style.display = "block";
    }

    render() {
        return (
            <>
                <CatalogHeader onClick={this.handleOpenCart} />
                <div>
                    <p className="subtitle">Olá! Selecione os produtos desejados:</p>
                    <div id="products-container">
                        {this.products.map((product, i) => (
                            <Product key={i}
                                name = {product.name} 
                                price = {product.price} 
                                imagePath = {product.imagePath} 
                                amount = {this.state.amount[i]} 
                                onClick = {() => this.handleClick(i)}
                            />
                        ))}
                    </div>
                    <div id="cart-access-container">
                        <button id="cart-access-button" onClick={this.handleOpenCart}>
                            Acessar o carrinho
                            <ShoppingCart color="white" size={20} className="icon" />
                        </button>
                    </div>
                </div>
                <Cart />
            </>
        );
    }
}

export default Catalog;