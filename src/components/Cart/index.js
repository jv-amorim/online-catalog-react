import React from 'react';

import CartItem from '../CartItem';
import WhatsAppButton from '../WhatsAppButton'

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

    render() {
        return (
            <div id="cart-panel">
                <div id="cart-content">
                    <div id="cart-header">
                        <XCircle className="cart-button" onClick={this.closeCart} />
                        <h1>Carrinho</h1>
                    </div>
                    <div id="cart-items">
                        <table>
                            <tbody>
                                <tr>
                                    <th>Produto</th>
                                    <th>Quant.</th>
                                    <th>Preço</th>
                                    <th>Ações</th>
                                </tr>
                                {this.products.map((product, i) => {
                                    if (product.amount > 0) {
                                        return (
                                            <CartItem 
                                                key={i}
                                                productId={i}
                                                product={product} 
                                                increaseMethod={this.increaseMethod} 
                                                decreaseMethod={this.decreaseMethod} 
                                            />
                                        );
                                    }
                                    return null;
                                })}
                                <tr>
                                    <td><b>Total</b></td>
                                    <td>
                                        {this.products.reduce((total, next) => {
                                            return total + next.amount;
                                        }, 0)}
                                    </td>
                                    <td className="total-price">
                                        R$ {this.products.reduce((total, next) => {
                                            return total + (next.price * next.amount);
                                        }, 0)
                                        .toLocaleString({currency: "BRL"})}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <WhatsAppButton products={this.products} />
                </div>
            </div>
        );
    }
}

export default Cart;