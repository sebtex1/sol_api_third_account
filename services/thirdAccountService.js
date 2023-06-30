const thirdAccountDao = require('../dao/thirdAccountDao');

exports.findAll = () => {
    return thirdAccountDao.findAll();
};