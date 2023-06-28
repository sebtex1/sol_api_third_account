const helloDao = require('../dao/helloDao');

exports.getHello = () => {
    const hello = helloDao.getHello();
    console.log(hello);
    return hello;
};