# React Tailwindcss Boilerplate build with Vite

This is a [ReactJS](https://reactjs.org) + [Vite](https://vitejs.dev) boilerplate to be used with [Tailwindcss](https://tailwindcss.com).

## Run the app

- Se connecter avec les identifiants fournis dans l'email

## Consignes

Etapes:

- Récupérer la température de la 1ère zone de l'habitation à l'aide des endpoints fournis(cf: endpoints).
- Changer la température de la zone à l'aide du composant thermostat.
  - La température minimum sera de 5°C et la maximum sera de 28°C
- Lors du changement de tempéraure, un composant de bas de page devra s'ouvir avec deux inputs:
  - Le premier sera pour afficher l'heure de 0 à 24,
  - le second les minutes (0, 15, 30, 45 seront les seuls valeurs acceptés)
  - Deux boutons seront présents un pour confirmer avec appel api et un pour annuler
- A la validation, la modale de bas de page confirmera l'instruction temporaire avec un message indiquant la fin de la chauffe temporaire.
  - On pourra aussi annuler la chauffe temporaire, via un bouton annuler.
- Bonus:
  - Ecrire les tests de votre choix permettant d'assurer que la fonctionnalité fonctionne correctement
  - Ajout de regle eslint pour éviter d'envoyer du code avec du typage de type any, des console.log ou des debuggers.
  - Optimiser l'utilisation de react-query

## Endpoints

Vous aurez besoin du housing id associée à votre compte. Pour cela utiliser le hooks useHousingId pour le récuperer.

Le client pour requéter vient du package aws-amplify, et peut être obtenu de la manière suivante import { API } from "aws-amplify".

```js
- GET: `API.get(Service.Thermal, url, {})`
- POST: `API.get(Service.Thermal, url, { body: { key: value}})`
```

Pour récupérer les infos de la zone, il faut appeler l'endpoint thermal-details, et prendre la première zone dans le champ zone.

```js
API.get(Service.Thermal, '/housings/${housingId}/thermal-details', {})
```

La valeur appliqué à la zone se base sur des températures de presence, se trouvant dans la partie { set_point: { instruction: "presence_1" | "presence_2" | "presence_3" | "presence_4" | "away" }}
Utilisé les valeurs de l'objet suivant pour définir la température:

```js
const temperatures = {
  presence_1: 16,
  presence_2: 18,
  presence_3: 20,
  presence_4: 22,
  away: 14,
  frost_protection: 12
}
```

Pour envoyer une instruction temporaire sur la zone, il faut faire appel à l'url:

```js
API.post(
  Service.Thermal,
  '/housings/${housingsId}/thermal-control/zones/${zoneId}/temporary-instruction',
  { body: { duration: number, set_point: { instruction: number } } }
)
```

La réponse renvoit la zone associée avec une valeur d'events de type:

```js
events: {
  temporary_instruction: {
    id: "6bf2fcb3-44da-4cc7-b0d2-25880d093783",
    duration: 120,
    end_at: "2022-08-12T16:00:33.684155+02:00",
    set_point: {
      instruction: 16.5
    }
  }
}
```

Pour supprimer l'instruction temporaire:

```js
API.del(
  Service.Thermal,
  '/housings/${housingsId}/thermal-control/zones/${zoneId}/temporary-instruction',
  {}
)
```

## Point d'attentions

- Le propreté du code (indentation, code commenté)
- Le découpage en composants (ne pas hésiter à refactorer)
- L'utilsation de librairie présentes dans le projet
- Bonne pratique de react
- L'utilisation de git
- L'utilisation de typescript
- UX
