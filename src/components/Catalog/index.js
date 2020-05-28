import React from 'react';

import Cart from '../Cart';
import CatalogHeader from '../CatalogHeader';
import CatalogBody from '../CatalogBody';

import productsData from '../../data/products.json';
import './stylesheet.css';

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: productsData.map((product) => ({ ...product, amount: 0 }))
        };
    }
    
    increaseProductAmount = (i) => {
        const products = this.state.products;
        products[i].amount++;
       
        this.setState({
            products: products
        });
    }
    
    decreaseProductAmount = (i) => {
        const products = this.state.products;
        products[i].amount--;
       
        this.setState({
            products: products
        });
    }
    
    handleOpenCart = () => {
        const cart = document.getElementById('cart-panel');
        cart.style.display = "block";
    }

    render() {
        return (
            <>
                <CatalogHeader onClick={this.handleOpenCart} />
                <CatalogBody 
                    products={this.state.products} 
                    increaseMethod={this.increaseProductAmount} 
                    openCartMethod={this.handleOpenCart}
                />
                <Cart 
                    products={this.state.products} 
                    increaseMethod={this.increaseProductAmount}     
                    decreaseMethod={this.decreaseProductAmount}     
                />
            </>
        );
    }
}

export default Catalog;