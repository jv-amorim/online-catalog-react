export default function GenerateOrderLinkForWhatsApp(products, address) {
    const phoneNumber = '5538988484205';
    let orderMessage = CreateOrderMessageForWhatsApp(products);
    orderMessage = AppendAddressToTheOrderMessage(orderMessage, address)

    const encodedMessage = encodeURI(orderMessage);
    const link = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    return link;
}

function CreateOrderMessageForWhatsApp(products) {
    let message = 'Olá! Desejo fazer um pedido: \n\n*Pedido:*\n';

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

    message += `*TOTAL: R$ ${total}*\n`;

    return message;
}

function AppendAddressToTheOrderMessage(orderMessage, address) {
    const addressText = 
        "\n*Endereço:*\n" +
        `Nome: ${address.name}\n` +
        `Logradouro: ${address.street}\n` +
        `Nº: ${address.houseNumber}\n` +
        `Complemento: ${address.complement}\n` +
        `Bairro: ${address.neighborhood}`;
    
    return orderMessage.concat(addressText);
}