const ThirdAccount = require('../models/thirdAccount');

exports.findAll = async () => {
    const thirdAccounts = await ThirdAccount.findAll();
    return thirdAccounts;
};