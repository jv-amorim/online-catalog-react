import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function SendProductsByWhatsApp(products) {
    const phoneNumber = '5538991404533';
    const encodedMessage = encodeURI(CreateWhatsAppMessageFromProducts(products));

    const link = 'https://wa.me/' + phoneNumber + '?text=' + encodedMessage;
    return link;
}

function CreateWhatsAppMessageFromProducts(products) {
    let message = 'Olá! Desejo fazer um pedido: ';

    for (let index = 0; index < products.length; index++)
    {
        const product = products[index];

        if (product.amount > 0)
        {
            message += 
                product.name
                + ': R$ ' 
                + (product.amount * product.price)
                .toLocaleString({currency: 'BRL'}) 
                + ' (' 
                + product.amount + ' unid.)'
                + ' | ';
        }
    }

    const total = 
        products.reduce((total, next) => {
            return total + (next.price * next.amount);
        }, 0).toLocaleString({currency: "BRL"});

    message += '*TOTAL: R$ ' + total + '*';

    return message;
}

function WhatsAppButton({ products }) {
    return (
        <div id="whatsapp-container">
            <a 
                id="whatsapp-button" 
                href={SendProductsByWhatsApp(products)}
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