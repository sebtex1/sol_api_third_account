const express = require('express');
const router = express.Router();
const thirdAccountService = require('../services/thirdAccountService');

// Fonction permettant de gérer le timeout de la requête
const requestTimeout = (res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });
};

// Route permettant de récupérer tous les comptes tiers
const getAllThirdAccounts = async (req, res) => {
    requestTimeout(res);

    const thirdsAccount = await thirdAccountService.findAll();
    if (thirdsAccount === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(thirdsAccount);
};
router.get('/', getAllThirdAccounts);

// Route permettant de créer un compte tiers
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

// Route permettant de modifier un compte tiers
const updateThirdAccount = async (req, res) => {
    requestTimeout(res);

    const id = req.params.id;
    const thirdAccount = req.body;
    const result = await thirdAccountService.update(id, thirdAccount);
    if (result === false) {
        res.status(500).send('Erreur lors de la modification.');
        return;
    }
    res.status(200).send({ message: 'Modification réussie' });
};
router.put('/:id', updateThirdAccount);

// Route permettant de supprimer un compte tiers
const deleteThirdAccount = async (req, res) => {
    requestTimeout(res);

    const id = req.params.id;
    const result = await thirdAccountService.delete(id);
    if (result === false) {
        res.status(500).send('Erreur lors de la suppression.');
        return;
    }
    res.status(200).send({ message: 'Suppression réussie' });
};
router.delete('/:id', deleteThirdAccount);

module.exports = router;
  