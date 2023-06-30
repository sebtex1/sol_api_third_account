const express = require('express');
const router = express.Router();
const thirdAccountService = require('../services/thirdAccountService');

const requestTimeout = (res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });
};

const getAllThirdAccounts = async (req, res) => {
    requestTimeout(res);

    const thirdsAccount = await thirdAccountService.findAll();
    res.status(200).send(thirdsAccount);
};
router.get('/', getAllThirdAccounts);

const createThirdAccount = async (req, res) => {
    requestTimeout(res);

    const thirdAccount = req.body;
    const newThirdAccount = await thirdAccountService.create(thirdAccount);
    if (newThirdAccount === null) { 
        res.status(500).send('Erreur lors de la création.');
        return;
     }
    res.status(201).send({ message: 'Création réussie' , id: newThirdAccount.ta_id });
};
router.post('/', createThirdAccount);

module.exports = router;
  