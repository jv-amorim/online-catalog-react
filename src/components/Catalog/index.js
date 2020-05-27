import React from 'react';
import Product from '../Product';
import { ShoppingCart } from 'react-feather';
import './stylesheet.css';

function CatalogHeader() {
    return (
        <header>
            <h1 class="title">Catálogo Online</h1>
            <button id="shopping-cart">
                <ShoppingCart color="white" size={20} />
            </button>
        </header>
    );
}

class Catalog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: Array(100).fill(0)
        };
    }
    
    handleClick(i) {
        const newValues = this.state.values.slice();
        newValues[i]++;

        this.setState({
            values: newValues
        });
    }
    
    render() {
        return (
            <>
                <CatalogHeader />
                <div>
                    <p className="subtitle">Olá! Selecione os produtos desejados:</p>
                    <div id="products-container">
                        <Product
                            value={this.state.values[1]}
                            onClick={() => this.handleClick(1)} 
                        />
                        <Product
                            value={this.state.values[2]}
                            onClick={() => this.handleClick(2)} 
                        />
                        <Product
                            value={this.state.values[3]}
                            onClick={() => this.handleClick(3)} 
                        />
                        <Product
                            value={this.state.values[4]}
                            onClick={() => this.handleClick(4)} 
                        />
                        <Product
                            value={this.state.values[5]}
                            onClick={() => this.handleClick(5)} 
                        />
                        <Product
                            value={this.state.values[6]}
                            onClick={() => this.handleClick(6)} 
                        />
                        <Product
                            value={this.state.values[6]}
                            onClick={() => this.handleClick(6)} 
                        />
                        <Product
                            value={this.state.values[6]}
                            onClick={() => this.handleClick(6)} 
                        />
                        <Product
                            value={this.state.values[6]}
                            onClick={() => this.handleClick(6)} 
                        />
                        <Product
                            value={this.state.values[6]}
                            onClick={() => this.handleClick(6)} 
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default Catalog;