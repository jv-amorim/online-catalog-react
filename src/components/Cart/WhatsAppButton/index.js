import React from 'react';
import GenerateOrderLinkForWhatsApp from './OrderLinkGenerator';
import { FaWhatsapp } from 'react-icons/fa';

function WhatsAppButton({ products }) {
    return (
        <div id="whatsapp-container">
            <a 
                id="whatsapp-button" 
                href={GenerateOrderLinkForWhatsApp(products)}
            >
                Enviar o pedido 
                <FaWhatsapp 
                    color="white" 
                    size={25} 
                    className="icon" 
                />
            </a>
        </div>
    );
}

export default WhatsAppButton;