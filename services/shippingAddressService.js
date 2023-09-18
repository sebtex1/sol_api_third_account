const shippingAddressDao = require('../dao/shippingAddressDao');
const thirdAccountDao = require('../dao/thirdAccountDao');

// Fonction permettant de récupérer toutes les adresses de livraison
exports.findAll = () => {
    return shippingAddressDao.findAll();
}

// Fonction permettant de récupérer une adresse de livraison par son id
exports.findById = (id) => {
    return shippingAddressDao.findById(id);
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