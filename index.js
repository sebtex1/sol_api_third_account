const express = require('express');
const app = express();
const port = 3000; // Choisissez un port de votre choix
const sequelize = require('./config/database');

app.listen(port, () => {
        console.log(`Le serveur est démarré sur le port ${port}`);
    }
);

// Importer les routes
const thirdAccountController = require('./controllers/thirdAccountController');

// Utiliser les routes
app.use('/thirdAccounts', thirdAccountController);

// Vérifiez la connexion à la base de données
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
