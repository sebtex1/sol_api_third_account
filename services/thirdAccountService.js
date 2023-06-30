const thirdAccountDao = require('../dao/thirdAccountDao');

exports.findAll = () => {
    return thirdAccountDao.findAll();
};

exports.create = (thirdAccount) => {
    return thirdAccountDao.create(thirdAccount);
}