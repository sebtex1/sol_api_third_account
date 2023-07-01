const contactDao = require('../dao/contactDao');

// Fonction permettant de récupérer tous les contacts
exports.findAll = () => {
    return contactDao.findAll();
}

// Fonction permettant de récupérer un contact par son id
exports.findById = (id) => {
    return contactDao.findById(id);
}

// Fonction permettant de créer un contact
exports.create = (contact) => {
    return contactDao.create(contact);
}

// Fonction permettant de modifier un contact
exports.update = (id, contact) => {
    return contactDao.update(id, contact);
}

// Fonction permettant de supprimer un contact
exports.delete = (id) => {
    return contactDao.delete(id);
}