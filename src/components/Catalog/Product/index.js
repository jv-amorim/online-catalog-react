import React from 'react';
import './stylesheet.css';

function Product(props) {
    return (
        <div className="product-item" onClick={props.onClick}>
            <div className="counter">{props.product.amount}</div>
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + props.product.imagePath} alt="Product"></img>
            </div>
            <div className="details">
                <p className="product-name">{props.product.name}</p>
                <p className="product-price">R$ {props.product.price.toLocaleString({currency: "BRL"})}</p>
            </div>
        </div>
    );
}

export default Product;