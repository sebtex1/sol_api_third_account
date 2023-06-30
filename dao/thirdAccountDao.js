const ThirdAccount = require('../models/thirdAccount');

exports.findAll = async () => {
    try {
        const thirdAccounts = await ThirdAccount.findAll();
        return thirdAccounts;
    } catch (error) {
        console.error("Erreur lors de la récupération :", error.message);
        return null;
    }
};

exports.create = async (thirdAccount) => {
    try {
        const newThirdAccount = await ThirdAccount.create(thirdAccount);
        return newThirdAccount;
    } catch (error) {
        console.error("Erreur lors de la création :", error.message);
        return null;
    }
}

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