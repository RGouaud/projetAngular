# Projet angular

## Installation
- Executer la commande `npm install` pour installer les dépendances
- Executer la commande `ng serve` pour lancer le serveur de développement
- Executer la commande `json-server --watch -p 3001 interventions.json` pour lancer le serveur de données
- ATTENTION, le serveur json-server utilise le port 3001
- Le fichier json bien formé est situé dans le dossier à la racine, nommé `API/interventions.json`

## Détails techniques 
- Dans le fichier `inter.service.ts` 
```
map(inter_max => {
        inter.id = inter_max.id + 1; // on incrémente l'id de l'objet inter
        return inter; // on retourne l'objet inter avec l'id incrémenté directement appliqué à l'objet
      }),
```
Diffère du code du TD car le code ne fonctionnait pas chez moi.

## Détails visuels 
- J'ai fait un effort sur le css, je détèste ca, ne m'en tenez pas rigueur :') 
(j'espere compenser avec ce magnifique readme)
