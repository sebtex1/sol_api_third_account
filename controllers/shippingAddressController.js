const express = require('express');
const router = express.Router();
const shippingAddressService = require('../services/shippingAddressService');

// Fonction permettant de gérer le timeout de la requête
const requestTimeout = (res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });
}

// Route permettant de récupérer toutes les adresses de livraison
const getAllShippingAddresses = async (req, res) => {
    requestTimeout(res);

    const shippingAddresses = await shippingAddressService.findAll();
    if (shippingAddresses === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(shippingAddresses);
}
router.get('/', getAllShippingAddresses);

// Route permettant de récupérer une adresse de livraison par son id
const getShippingAddressById = async (req, res) => {
    requestTimeout(res);

    const id = req.params.id;
    const shippingAddress = await shippingAddressService.findById(id);
    if (shippingAddress === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(shippingAddress);
}
router.get('/:id', getShippingAddressById);

// Route permettant de créer une adresse de livraison
const createShippingAddress = async (req, res) => {
    requestTimeout(res);

    const shippingAddress = req.body;
    const newShippingAddress = await shippingAddressService.create(shippingAddress);
    if (newShippingAddress === null) {
        res.status(500).send('Erreur lors de la création.');
        return;
    }
    res.status(201).send({ message: 'Création réussie', id: newShippingAddress.ta_id });
}
router.post('/', createShippingAddress);

// Route permettant de modifier une adresse de livraison
const updateShippingAddress = async (req, res) => {
    requestTimeout(res);

    const id = req.params.id;
    const shippingAddress = req.body;
    const result = await shippingAddressService.update(id, shippingAddress);
    if (result === false) {
        res.status(500).send('Erreur lors de la modification.');
        return;
    }
    res.status(200).send({ message: 'Modification réussie' });
}
router.put('/:id', updateShippingAddress);

// Route permettant de supprimer une adresse de livraison
const deleteShippingAddress = async (req, res) => {
    requestTimeout(res);

    const id = req.params.id;
    const result = await shippingAddressService.delete(id);
    if (result === false) {
        res.status(500).send('Erreur lors de la suppression.');
        return;
    }
    res.status(200).send({ message: 'Suppression réussie' });
}
router.delete('/:id', deleteShippingAddress);

// Route retournant les options de la route /shippingAddresses
const getOptions = (req, res) => {
    requestTimeout(res);

    res.status(200).send({ message: 'Options récupérées', methodsAllowed: 'GET, POST, PUT, DELETE, OPTIONS', method: req.method });
}
router.options('/', getOptions);

module.exports = router;