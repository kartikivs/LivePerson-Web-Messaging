
lpTag.sdes = lpTag.sdes || [];
lpTag.identities = [];
function identityFn(callback) {
    callback({
        iss: "Kartiki",
        acr: "loa1",
        sub: "1292157"
    });
}


lpTag.sdes.push({
    "type": "cart",
    "total": 7777,
    "currency": "USD",
    "numItems": "1",
    "products": [{
        "product": {
            "name": "Title : Shop Online",
            "category": " ",
            "price": " "
        }
    }]
})
lpTag.identities.push(identityFn);









