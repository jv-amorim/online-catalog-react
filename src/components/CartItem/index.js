import React from 'react';
import { PlusCircle, MinusCircle } from 'react-feather';

function CartItem({ productId, product, increaseMethod, decreaseMethod }) {
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
                        onClick={() => increaseMethod(productId)}
                    />
                    <MinusCircle 
                        className="cart-button" 
                        width={20} 
                        onClick={() => decreaseMethod(productId)}
                    />
                </div>
            </td>
        </tr>
    );
}

export default CartItem;