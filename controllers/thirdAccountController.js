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

    const company_id = req.headers.company_id;
    const thirdsAccount = await thirdAccountService.findAll();
    if (thirdsAccount === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(thirdsAccount);
};
router.get('/', getAllThirdAccounts);

// Route permettant de récupérer un compte tiers par son id
const getThirdAccountById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const thirdAccount = await thirdAccountService.findById(id);
    if (thirdAccount === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(thirdAccount);
};
router.get('/:id', getThirdAccountById);

// Route permettant de récupérer les shippingAddress d'un compte tiers par son id
const getAllShippingAddressById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const shippingAddress = await thirdAccountService.findAllShippingAddressById(id);
    if (shippingAddress === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(shippingAddress);
};
router.get('/:id/shippingAddress', getAllShippingAddressById);

// Route permettant de récupérer le shippingAddress d'un compte tiers par son id et son propre id
const getShippingAddressById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const shippingAddressId = req.params.shippingAddressId;
    const shippingAddress = await thirdAccountService.findShippingAddressById(id, shippingAddressId);
    if (shippingAddress === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(shippingAddress);
};
router.get('/:id/shippingAddress/:shippingAddressId', getShippingAddressById);

// Route permettant de récupérer les contacts d'un compte tiers par son id
const getAllContactById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const contact = await thirdAccountService.findAllContactById(id);
    if (contact === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(contact);
};
router.get('/:id/contact', getAllContactById);

// Route permettant de récupérer le contact d'un compte tiers par son id et son propre id
const getContactById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const contactId = req.params.contactId;
    const contact = await thirdAccountService.findContactById(id, contactId);
    if (contact === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(contact);
};
router.get('/:id/contact/:contactId', getContactById);

// Route permettant de créer un compte tiers
const createThirdAccount = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
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

    const company_id = req.headers.company_id;
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

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const result = await thirdAccountService.delete(id);
    if (result === false) {
        res.status(500).send('Erreur lors de la suppression.');
        return;
    }
    res.status(200).send({ message: 'Suppression réussie' });
};
router.delete('/:id', deleteThirdAccount);

// Route retournant les options de la route /thirdAccount
const getOptions = (req, res) => {
    requestTimeout(res);

    res.status(200).send({ message: 'Options récupérées', methodsAllowed: 'GET, POST, PUT, DELETE, OPTIONS', method: req.method });
};
router.options('/', getOptions);

module.exports = router;
  