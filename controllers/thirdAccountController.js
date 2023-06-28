const express = require('express');
const router = express.Router();
const ThirdAccount = require('../models/thirdAccount');

const getAllThirdsAccount = async (req, res) => {
    res.setTimeout(5000, () => {
        const errorMessage = 'La requête a expiré après 5 secondes.';
        res.status(500).send(errorMessage);
    });

    const thirdsAccount = await ThirdAccount.findAll();

    console.log(thirdsAccount.every(thirdAccount => thirdAccount instanceof ThirdAccount)); // true
    console.log("All third accounts:", JSON.stringify(thirdsAccount, null, 2));
};

router.get('/', getAllThirdsAccount);

module.exports = router;
  