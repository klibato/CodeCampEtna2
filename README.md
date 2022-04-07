# Introduction 

Défi lancé par notre école, qui consiste à créer un système d'émargement via nos cartes. 


Installation d'expo : 
```
npm install --global expo-cli
```
Initialiser l'application sous le nom donnée 
```
expo init my-app
```
Ouvrir le dossier 
```
cd my-app
```
Demarrer le projet 
```
expo start
```

Première partie : API 
(En cours)

- Authentification admin 

- Historique emargements 

- liste étudiant en retard, absent et présent par jour 
trié par leur status 

	routes : 

	retard 
	absent
	
- accès historique d'un étudiant (assiduité) 

- donner un état "justifié" aux retards ou absence 

```
{
"student(tous)": [
	{
	"id": 1,
	"username": "ezzine_a",
	"status": "absent",
	"hours": "Monday-Saturday 9AM–9PM, Sunday Closed",
	"created_at": "2022-03-05T07:36:13.000000Z",
	"updated_at": "2022-03-05T07:36:13.000000Z"
	},
	{
	"id": 2,
	"username": "anicet_e",
	"status": "present",
	"hours": "Monday-Saturday 9AM–9PM, Sunday Closed",
	"created_at": "2022-03-05T07:36:13.000000Z",
	"updated_at": "2022-03-05T07:36:13.000000Z"
	}
]

"status(absent)": [
	{
	"id": 1,
	"username": "ezzine_a",
	"status": "absent",
	"hours": "Monday-Saturday 9AM–9PM, Sunday Closed",
	"created_at": "2022-03-05T07:36:13.000000Z",
	"updated_at": "2022-03-05T07:36:13.000000Z"
	}]	
}
```

### Schéma relationnel 

![image](https://user-images.githubusercontent.com/102663245/161014511-68856e71-d39c-4ab6-8dd9-acd9ae518c8d.png)


