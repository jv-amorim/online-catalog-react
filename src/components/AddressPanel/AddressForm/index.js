import React from 'react';

export default function AddressForm({ setAddressMethod }) {
    const setAddress = () => {
        const nameFieldValue = document.getElementById('address-name').value;
        const streetFieldValue = document.getElementById('address-street').value;
        const houseNumberFieldValue = document.getElementById('address-houseNumber').value;
        const complementFieldValue = document.getElementById('address-complement').value;
        const neighborhoodFieldValue = document.getElementById('address-neighborhood').value;

        const address = {
            name: nameFieldValue,
            street: streetFieldValue,
            houseNumber: houseNumberFieldValue,
            complement: complementFieldValue,
            neighborhood: neighborhoodFieldValue
        }

        setAddressMethod(address);
    };

    return (
        <div id="address-form-container">
            <div className="form-panel">
                <div className="form-row">
                    <input 
                        type="text" 
                        id="address-name" 
                        placeholder="Nome de quem receberá a entrega" 
                        onInput={() => setAddress()}
                    />
                    <br />
                </div>
                <div className="form-row">
                    <input 
                        type="text" 
                        id="address-street" 
                        placeholder="Logradouro (rua, avenida, etc.)" 
                        onInput={() => setAddress()}
                    />
                    <br />
                </div>
                <div className="form-row">
                    <input 
                        type="text" 
                        id="address-houseNumber" 
                        placeholder="Nº" 
                        onInput={() => setAddress()}
                    />
                    <br />
                </div>
                <div className="form-row">
                    <input 
                        type="text" 
                        id="address-complement" 
                        placeholder="Complemento (apart, bloco, etc.)" 
                        onInput={() => setAddress()}
                    />
                    <br />
                </div>
                <div className="form-row">
                    <input 
                        type="text" 
                        id="address-neighborhood" 
                        placeholder="Bairro" 
                        onInput={() => setAddress()}
                    />
                    <br />
                </div>
            </div>
        </div>
    );
}