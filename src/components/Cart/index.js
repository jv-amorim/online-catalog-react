import React from 'react';
import './stylesheet.css';
import { XCircle, Trash, PlusCircle, MinusCircle } from 'react-feather';
import { FaWhatsapp } from 'react-icons/fa'

function CartItem({ key, product, increaseMethod, decreaseMethod }) {
    return (
        <tr className="cart-item">
            <td>
                <p className="cart-item-name">{product.name}</p>
            </td>
            <td>
                {product.amount}
            </td>
            <td>
                R$ {(product.amount * product.price).toLocaleString({currency: "BRL"})}
            </td>
            <td>
                <div className="cart-item-buttons">
                    <PlusCircle 
                        className="cart-button" 
                        width={20} 
                        onClick={() => increaseMethod(key)}
                    />
                    <MinusCircle 
                        className="cart-button" 
                        width={20} 
                        onClick={() => decreaseMethod(key)}
                    />
                    <Trash className="cart-button" width={20} />
                </div>
            </td>
        </tr>
    );
}

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
                                            product={product} 
                                            increaseMethod={this.increaseMethod} 
                                            decreaseMethod={this.decreaseMethod} 
                                        />
                                    );
                                }
                                return "";
                            })}
                            <tr>
                                <td>
                                    <b>Total</b>
                                </td>
                                <td>
                                    0
                                </td>
                                <td className="total-price">
                                    R$ 0,00
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div id="whatsapp-container">
                        <button id="whatsapp-button">
                            Enviar o pedido 
                            <FaWhatsapp color="white" size={25} className="icon" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cart;