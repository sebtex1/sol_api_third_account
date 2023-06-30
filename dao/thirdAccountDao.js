const ThirdAccount = require('../models/thirdAccount');

// Fonction permettant de récupérer tous les comptes tiers
exports.findAll = async () => {
    try {
        const thirdAccounts = await ThirdAccount.findAll();
        return thirdAccounts;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
};

// Fonction permettant de créer un compte tiers
exports.create = async (thirdAccount) => {
    try {
        const newThirdAccount = await ThirdAccount.create(thirdAccount);
        return newThirdAccount;
    } catch (error) {
        console.error("Erreur lors de la création :", error.message);
        return null;
    }
}

// Fonction permettant de modifier un compte tiers
exports.update = async (id, thirdAccount) => {
    try {
        const thirdAccountToUpdate = await ThirdAccount.findByPk(id);
        if (thirdAccountToUpdate === null) {
            console.error("Erreur lors de la modification : le compte tiers n'existe pas.");
            return false;
        }
        await thirdAccountToUpdate.update(thirdAccount);
        return true;
    } catch (error) {
        console.error("Erreur lors de la modification :", error.message);
        return false;
    }
}

// Fonction permettant de supprimer un compte tiers
exports.delete = async (id) => {
    try {
        const thirdAccount = await ThirdAccount.findByPk(id);
        if (thirdAccount === null) {
            console.error("Erreur lors de la suppression : le compte tiers n'existe pas.");
            return false;
        }
        await thirdAccount.destroy();
        return true;
    } catch (error) {
        console.error("Erreur lors de la suppression :", error.message);
        return false;
    }
}