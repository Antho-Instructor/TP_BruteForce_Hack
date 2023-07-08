import fs from "fs";

// Générer une combinaison aléatoire d'utilisateur et de mot de passe
function generateRandomCombination() {
	const randomUser = `utilisateur${Math.floor(Math.random() * 100) + 1}`;
	const randomPassword = `motdepasse${Math.floor(Math.random() * 100) + 1}`;
	return { username: randomUser, password: randomPassword };
}

const combinations = {
	usernames: [],
	passwords: [],
};

// Générer 10 combinaisons aléatoires
for (let i = 0; i < 10; i++) {
	const { username, password } = generateRandomCombination();
	combinations.usernames.push(username);
	combinations.passwords.push(password);
}

// Ajout des bons logins pour être sûr de les trouver
combinations.usernames.push("admin");
combinations.passwords.push("password");

// Convertir l'objet JS en JSON
/**
 * JSON.stringify(combinations, null, 2);
 * JSON.stringify prend 3 paramètres :
 * - L'objet à convertir en JSON
 * - Une fonction de transformation (pas besoin ici)
 * - Le nombre d'espaces à utiliser pour l'indentation
 */
const jsonData = JSON.stringify(combinations, null, 2);

// Écrire le fichier JSON
fs.writeFile("combinations.json", jsonData, "utf8", (err) => {
	if (err) {
		console.error(
			"Une erreur s'est produite lors de l'écriture du fichier combinations.json :",
			err
		);
	} else {
		console.log("Le fichier combinations.json a été généré avec succès !");
	}
});
