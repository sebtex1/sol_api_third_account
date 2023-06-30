const thirdAccountDao = require('../dao/thirdAccountDao');

// Fonction permettant de récupérer tous les comptes tiers
exports.findAll = () => {
    return thirdAccountDao.findAll();
};

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