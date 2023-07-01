const shippingAddressDao = require('../dao/shippingAddressDao');

// Fonction permettant de récupérer toutes les adresses de livraison
exports.findAll = () => {
    return shippingAddressDao.findAll();
}

// Fonction permettant de créer une adresse de livraison
exports.create = (shippingAddress) => {
    return shippingAddressDao.create(shippingAddress);
}

// Fonction permettant de modifier une adresse de livraison
exports.update = (id, shippingAddress) => {
    return shippingAddressDao.update(id, shippingAddress);
}

// Fonction permettant de supprimer une adresse de livraison
exports.delete = (id) => {
    return shippingAddressDao.delete(id);
}