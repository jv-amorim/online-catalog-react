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
        this.state = {
            products: productsData.map((product) => ({ ...product, amount: 0 }))
        };
    }
    
    increaseProductAmount(i) {
        const products = this.state.products;
        products[i].amount++;
       
        this.setState({
            products: products
        });
    }
    
    decreaseProductAmount(i) {
        const products = this.state.products;
        products[i].amount--;
       
        this.setState({
            products: products
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
                        {this.state.products.map((product, i) => (
                            <Product 
                                key={i}
                                product={product} 
                                onClick = {() => this.increaseProductAmount(i)}
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
                <Cart 
                    products={this.state.products} 
                    increaseMethod={this.increaseProductAmount}     
                />
            </>
        );
    }
}

export default Catalog;