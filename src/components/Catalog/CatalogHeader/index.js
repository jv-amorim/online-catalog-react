import React from 'react';
import { ShoppingCart } from 'react-feather';

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

export default CatalogHeader;