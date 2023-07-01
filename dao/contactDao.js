const Contact = require('../models/contact');

// Fonction permettant de récupérer tous les contacts
exports.findAll = async () => {
    try {
        const contacts = await Contact.findAll();
        return contacts;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de récupérer un contact par son id
exports.findById = async (id) => {
    try {
        const contact = await Contact.findByPk(id);
        return contact;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de créer un contact
exports.create = async (contact) => {
    try {
        const newContact = await Contact.create(contact);
        return newContact;
    } catch (error) {
        console.error("Erreur lors de la création :", error.message);
        return null;
    }
}

// Fonction permettant de modifier un contact
exports.update = async (id, contact) => {
    try {
        const contactToUpdate = await Contact.findByPk(id);
        if (contactToUpdate === null) {
            console.error("Erreur lors de la modification : le contact n'existe pas.");
            return false;
        }
        await Contact.update(contact, { where: { ta_id: id } });
        return true;
    } catch (error) {
        console.error("Erreur lors de la modification :", error.message);
        return false;
    }
}

// Fonction permettant de supprimer un contact
exports.delete = async (id) => {
    try {
        const contact = await Contact.findByPk(id);
        if (contact === null) {
            console.error("Erreur lors de la suppression : le contact n'existe pas.");
            return false;
        }
        await contact.destroy();
        return true;
    } catch (error) {
        console.error("Erreur lors de la suppression :", error.message);
        return false;
    }
}