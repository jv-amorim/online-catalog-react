function GenerateOrderLinkForWhatsApp(products) {
    const phoneNumber = '5538988484205';
    const encodedMessage = encodeURI(CreateOrderMessageForWhatsApp(products));

    const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return link;
}

function CreateOrderMessageForWhatsApp(products) {
    let message = 'Olá! Desejo fazer um pedido: \n\n';

    for (let index = 0; index < products.length; index++) {
        const product = products[index];

        if (product.amount > 0) {
            var totalProductPrice = 
                (product.amount * product.price)
                .toLocaleString({currency: 'BRL'});

            message += `${product.name}: R$ ${totalProductPrice} (${product.amount} unid.)\n`;
        }
    }

    const total = 
        products
        .reduce((total, next) => total + (next.price * next.amount), 0)
        .toLocaleString({currency: "BRL"});

    message += `\n*TOTAL: R$ ${total}*\n`;

    return message;
}

export default GenerateOrderLinkForWhatsApp;