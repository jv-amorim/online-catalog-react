import React from 'react';
import CartItem from '../CartItem';

function CartTable ({ products, increaseMethod, decreaseMethod }) {
    return (
        <table>
            <colgroup>
                <col span="1" style={{width: '30%'}}/>
                <col span="1" style={{width: '15%'}}/>
                <col span="1" style={{width: '30%'}}/>
                <col span="1" style={{width: '30%'}}/>
            </colgroup>
            <tbody>
                <tr>
                    <th>Produto</th>
                    <th>Quant.</th>
                    <th>Preço</th>
                    <th>Ações</th>
                </tr>
                {products.map((product, i) => {
                    if (product.amount > 0) {
                        return (
                            <CartItem 
                                key={i}
                                productId={i}
                                product={product} 
                                increaseMethod={increaseMethod} 
                                decreaseMethod={decreaseMethod} 
                            />
                        );
                    }
                    return null;
                })}
                <tr>
                    <td><b>Total</b></td>
                    <td>
                        {products.reduce((total, next) => total + next.amount, 0)}
                    </td>
                    <td className="total-price">
                        R$ {products.reduce((total, next) => total + (next.price * next.amount), 0)
                        .toLocaleString({currency: "BRL"})}
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default CartTable;