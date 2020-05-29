import React from 'react';
import CartTable from './CartTable';

import { XCircle } from 'react-feather';
import './stylesheet.css';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        this.increaseMethod = props.increaseMethod;
        this.decreaseMethod = props.decreaseMethod;
    }
    
    closeCart() {
        const cartElement = document.getElementById('cart-panel');
        cartElement.style.display = "none";
    }

    openAddressPanel = () => {
        this.closeCart();
        const addressPanel = document.getElementById('address-panel');
        addressPanel.style.display = "block";
    }

    render() {
        return (
            <div id="cart-panel">
                <div id="cart-content">
                    <div id="cart-header">
                        <XCircle className="close-button" onClick={this.closeCart} />
                        <h1>Carrinho</h1>
                    </div>
                    <div id="cart-items">
                        <CartTable 
                            products={this.products} 
                            increaseMethod={this.increaseMethod} 
                            decreaseMethod={this.decreaseMethod} 
                        />
                    </div>
                    <div id="order-confirmation-container">
                        <a id="order-confirmation-button" onClick={this.openAddressPanel}>
                            Confirmar
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;