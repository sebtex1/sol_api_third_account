const express = require('express');
const router = express.Router();
const thirdAccountService = require('../services/thirdAccountService');

const getAllThirdsAccount = async (req, res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });

    const thirdsAccount = await thirdAccountService.findAll();
    res.status(200).send(thirdsAccount);
};

router.get('/', getAllThirdsAccount);

module.exports = router;
  