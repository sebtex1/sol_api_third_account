require('dotenv').config();
const express = require('express');
const sequelize = require('./config/database');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
        console.log(`Le serveur est démarré sur le port ${port}`);
    }
);

// Importation des routes
const thirdAccountController = require('./controllers/thirdAccountController');
app.use('/thirdAccounts', thirdAccountController);

const serviceController = require('./controllers/serviceController');
app.use('/contacts', serviceController);

// Vérifie la connexion à la base de données
sequelize
    .authenticate()
    .then(() => {
            console.log('Connexion à la base de données réussie.');
        }
    )
    .catch((error) => {
            console.error('Erreur de connexion à la base de données:', error);
        }
    );
