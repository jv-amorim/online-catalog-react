import React from 'react';
import './stylesheet.css';

function Product(props) {
    return (
        <div className="product-item" onClick={props.onClick}>
            <div className="counter">{props.amount}</div>
            <div className="image-container">
                <img src={process.env.PUBLIC_URL + props.imagePath} alt="Product"></img>
            </div>
            <div className="details">
                <p className="product-name">{props.name}</p>
                <p className="product-price">{props.price}</p>
            </div>
        </div>
    );
}

export default Product;