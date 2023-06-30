const ThirdAccount = require('../models/thirdAccount');

exports.findAll = async () => {
    const thirdAccounts = await ThirdAccount.findAll();
    return thirdAccounts;
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