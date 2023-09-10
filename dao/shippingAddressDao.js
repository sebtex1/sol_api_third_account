const ShippingAddress = require('../models/shippingAddress');

// Fonction permettant de récupérer toutes les adresses de livraison
exports.findAll = async () => {
    try {
        const shippingAddresses = await ShippingAddress.findAll();
        return shippingAddresses;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de récupérer une adresse de livraison par son id
exports.findById = async (id) => {
    try {
        const shippingAddress = await ShippingAddress.findByPk(id);
        return shippingAddress;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de récupérer toutes les adresses de livraison d'un compte tiers par son id
exports.findAllByThirdAccountId = async (id) => {
    try {
        const shippingAddress = await ShippingAddress.findAll({ where: { ta_third_account_id: id } });
        return shippingAddress;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de récupérer une adresse de livraison d'un compte tiers par son id et son propre id
exports.findByThirdAccountId = async (id, shippingAddressId) => {
    try {
        const shippingAddress = await ShippingAddress.findOne({ where: { ta_third_account_id: id, ta_id: shippingAddressId } });
        return shippingAddress;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
}

// Fonction permettant de créer une adresse de livraison
exports.create = async (shippingAddress) => {
    try {
        const newShippingAddress = await ShippingAddress.create(shippingAddress);
        return newShippingAddress;
    } catch (error) {
        console.error("Erreur lors de la création :", error.message);
        return null;
    }
}

// Fonction permettant de modifier une adresse de livraison
exports.update = async (id, shippingAddress) => {
    try {
        const shippingAddressToUpdate = await ShippingAddress.findByPk(id);
        if (shippingAddressToUpdate === null) {
            console.error("Erreur lors de la modification : l'adresse de livraison n'existe pas.");
            return false;
        }
        await ShippingAddress.update(shippingAddress, { where: { ta_id: id } });
        return true;
    } catch (error) {
        console.error("Erreur lors de la modification :", error.message);
        return false;
    }
}

// Fonction permettant de supprimer une adresse de livraison
exports.delete = async (id) => {
    try {
        const shippingAddress = await ShippingAddress.findByPk(id);
        if (shippingAddress === null) {
            console.error("Erreur lors de la suppression : l'adresse de livraison n'existe pas.");
            return false;
        }
        await shippingAddress.destroy();
        return true;
    } catch (error) {
        console.error("Erreur lors de la suppression :", error.message);
        return false;
    }
}