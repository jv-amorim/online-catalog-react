import React from 'react';
import './stylesheet.css';
import { XCircle, Trash, PlusCircle, MinusCircle } from 'react-feather';
import { FaWhatsapp } from 'react-icons/fa'

function CartItem(props) {
    return (
        <tr className="cart-item">
            <td>
                <p className="cart-item-name">Batata</p>
            </td>
            <td>
                0
            </td>
            <td>
                0
            </td>
            <td>
                <div className="cart-item-buttons">
                    <PlusCircle className="cart-button" width={20} />
                    <MinusCircle className="cart-button" width={20} />
                    <Trash className="cart-button" width={20} />
                </div>
            </td>
        </tr>
    );
}

class Cart extends React.Component {
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
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
                            <CartItem />
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