import React from 'react';
import GenerateOrderLinkForWhatsApp from './OrderLinkGenerator';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton({ products, address }) {
    return (
        <div id="whatsapp-container">
            <a 
                id="whatsapp-button" 
                onClick={() => SendOrderByWhatsApp(products, address)}
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

function SendOrderByWhatsApp(products, address) {
    const link = GenerateOrderLinkForWhatsApp(products, address);
    window.open(link,"_self");
}