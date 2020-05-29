import React from 'react';
import Product from '../Product';
import { ShoppingCart } from 'react-feather';

function CatalogBody({ products, increaseMethod, openCartMethod }) {
    return (
        <div>
            <p className="subtitle">Olá! Selecione os produtos desejados:</p>
            <div id="products-container">
                {products.map((product, i) => (
                    <Product 
                        key={i}
                        product={product} 
                        onClick = {() => increaseMethod(i)}
                    />
                ))}
            </div>
            <div id="cart-access-container">
                <button id="cart-access-button" onClick={openCartMethod}>
                    Acessar o carrinho
                    <ShoppingCart color="white" size={20} className="icon" />
                </button>
            </div>
        </div>
    );
}

export default CatalogBody;