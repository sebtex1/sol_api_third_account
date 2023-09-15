Feature: Première connexion utilisateur

    L'utilisateur veut se connecter à son compte sage pour la première fois, il doit cliqué sur le direct-link dans l'email reçu par sage.
    Il devra changer son mot de passe obligatoirement.

    Scenario: Ajout de l'utilisateur par l'admin

        Given L'utilisateur reçoit un email avec un lien-direct pour se connecter
        When Il clic sur le lien
        Then Il arive sur la page de connexion, il lui est demandé de choisir un mot de passe
        # à split
        When Il définit son mot de passe
        Then Il est connecté