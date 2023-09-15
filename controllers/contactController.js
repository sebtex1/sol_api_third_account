const express = require('express');
const router = express.Router();
const contactService = require('../services/contactService');
const thirdAccountService = require('../services/thirdAccountService');

// Fonction permettant de gérer le timeout de la requête
const requestTimeout = (res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });
}

// Route permettant de récupérer tous les contacts
const getAllContacts = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const contacts = await contactService.findAll();
    if (contacts === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(contacts);
}
router.get('/contacts', getAllContacts);

// Route permettant de récupérer un contact par son id
const getContactById = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const id = req.params.id;
    const contact = await contactService.findById(id);
    if (contact === null) {
        res.status(500).send('Erreur lors de la récupération.');
        return;
    }
    res.status(200).send(contact);
}
router.get('/contact/:id', getContactById);

// Route permettant de créer un contact
const createContact = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const idThirdAccount = req.params.idTA;
    const thirdAccount = await thirdAccountService.findById(idThirdAccount)
    if (thirdAccount === null) {
        res.status(500).send('Erreur lors de la récupération du compte tiers.');
        return;
    }
    const contact = req.body;
    const newContact = await contactService.create(contact, idThirdAccount);
    if (newContact === null) {
        res.status(500).send('Erreur lors de la création.');
        return;
    }
    res.status(201).send({ message: 'Création réussie', id: newContact.ta_id });
}
router.post('/thirdAccount/:idTA/contact', createContact);

// Route permettant de modifier un contact
const updateContact = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const idThirdAccount = req.params.idTA;
    const thirdAccount = await thirdAccountService.findById(idThirdAccount)
    if (thirdAccount === null) {
        res.status(500).send('Erreur lors de la récupération du compte tiers.');
        return;
    }
    const id = req.params.id;
    const contact = req.body;
    const result = await contactService.update(id, contact);
    if (result === false) {
        res.status(500).send('Erreur lors de la modification.');
        return;
    }
    res.status(200).send({ message: 'Modification réussie' });
}
router.put('/thirdAccount/:idTA/contact/:id', updateContact);

// Route permettant de supprimer un contact
const deleteContact = async (req, res) => {
    requestTimeout(res);

    const company_id = req.headers.company_id;
    const idThirdAccount = req.params.idTA;
    const thirdAccount = await thirdAccountService.findById(idThirdAccount)
    if (thirdAccount === null) {
        res.status(500).send('Erreur lors de la récupération du compte tiers.');
        return;
    }
    const id = req.params.id;
    const result = await contactService.delete(id);
    if (result === false) {
        res.status(500).send('Erreur lors de la suppression.');
        return;
    }
    res.status(200).send({ message: 'Suppression réussie' });
}
router.delete('/thirdAccount/:idTA/contact/:id', deleteContact);

// Route retournant les options de la route /contacts
const getOptions = (req, res) => {
    requestTimeout(res);

    res.status(200).send({ message: 'Options récupérées', methodsAllowed: 'GET, POST, PUT, DELETE, OPTIONS', method: req.method });
}
router.options('/contacts', getOptions);

module.exports = router;