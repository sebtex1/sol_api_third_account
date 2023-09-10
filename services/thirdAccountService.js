const thirdAccountDao = require('../dao/thirdAccountDao');
const shippingAddressDao = require('../dao/shippingAddressDao');
const contactDao = require('../dao/contactDao');

// Fonction permettant de récupérer tous les comptes tiers
exports.findAll = () => {
    return thirdAccountDao.findAll();
};

// Fonction permettant de récupérer un compte tiers par son id
exports.findById = (id) => {
    return thirdAccountDao.findById(id);
}

// Fonction permettant de récupérer les shippingAddress d'un compte tiers par son id
exports.findAllShippingAddressById = (id) => {
    return shippingAddressDao.findAllByThirdAccountId(id);
}

// Fonction permettant de récupérer le shippingAddress d'un compte tiers par son id et son propre id
exports.findShippingAddressById = (id, shippingAddressId) => {
    return shippingAddressDao.findByThirdAccountId(id, shippingAddressId);
}

// Fonction permettant de récupérer les contacts d'un compte tiers par son id
exports.findAllContactById = (id) => {
    return contactDao.findAllByThirdAccountId(id);
}

// Fonction permettant de récupérer le contact d'un compte tiers par son id et son propre id
exports.findContactById = (id, contactId) => {
    return contactDao.findByThirdAccountId(id, contactId);
}

// Fonction permettant de créer un compte tiers
exports.create = (thirdAccount) => {
    return thirdAccountDao.create(thirdAccount);
}

// Fonction permettant de modifier un compte tiers
exports.update = (id, thirdAccount) => {
    return thirdAccountDao.update(id, thirdAccount);
}

// Fonction permettant de modifier un compte tiers
exports.delete = (id) => {
    return thirdAccountDao.delete(id);
}