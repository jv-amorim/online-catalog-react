import React from 'react';

import AddressForm from './AddressForm';
import WhatsAppButton from './WhatsAppButton';

import { XCircle } from 'react-feather';
import './stylesheet.css';

class AddressPanel extends React.Component {
    constructor(props) {
        super(props);
        this.products = props.products;
        this.state = {
            address: {
                name: "",
                street: "",
                houseNumber: "",
                complement: "",
                neighborhood: ""
            }
        }
    }

    setAddressValues = (address) => {
        this.setState({address: address});
    } 
    
    closeAddressPanel() {
        const addressPanel = document.getElementById('address-panel');
        addressPanel.style.display = "none";
    }
    
    render() {
        return (
            <div id="address-panel">
                <div id="address-content">
                    <div id="address-header">
                        <XCircle className="close-button" onClick={this.closeAddressPanel} />
                        <h1>Endereço</h1>
                    </div>
                    <AddressForm setAddressMethod={this.setAddressValues} />
                    <WhatsAppButton 
                        products={this.products} 
                        address={this.state.address}
                    />
                </div>
            </div>
        );
    }
}

export default AddressPanel;