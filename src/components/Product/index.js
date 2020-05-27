import React from 'react';
import './stylesheet.css';

function Product(props) {
    return (
        <div className="product-item" onClick={props.onClick}>
            <div class="counter">{props.value}</div>
            <img src="https://picsum.photos/200" alt="Product"></img>
            <div class="details">
                <p class="product-name">
                    Product Name
                </p>
                <p class="product-price">
                    R$ 99,99
                </p>
            </div>
        </div>
    );
}

export default Product;