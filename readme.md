# 🦖 DinoPark

Bienvenue sur **DinoPark**, un projet de formation visant à créer le site web d’un parc à thème fictif dédié aux dinosaures. Ce projet pédagogique avait pour but d’apprendre les bases du développement web, notamment l’intégration d’une base de données avec **PostgreSQL**.

---

## 🎯 Objectifs du projet

- Créer un site web dynamique pour un parc à thème fictif
- Apprendre à structurer un projet web complet
- Mettre en place une base de données relationnelle avec PostgreSQL
- Manipuler les données côté serveur et côté client
- Découvrir les bonnes pratiques de développement web

---

## 🛠️ Technologies utilisées

- **HTML / CSS / JavaScript / TypeScript** : pour la structure et l’interactivité du site
- **PostgreSQL** : pour la gestion des données (visiteurs, attractions, dinosaures, réservations…)
- **Express** : pour le serveur web
- **Git & GitHub** : pour le versionnage

---

## 📁 Structure du projet

dinopark/ ├── public/ # Fichiers statiques (images, CSS, JS) ├── src/ # Code source du serveur │ ├── controllers/ # Logique métier │ ├── models/ # Accès aux données PostgreSQL │ └── routes/ # Définition des routes ├── views/ # Templates HTML ├── .env # Variables d’environnement ├── README.md # Ce fichier ! └── package.json # Dépendances et scripts

---

## 🧪 Installation et lancement

1. **Cloner le dépôt :**

```bash
git clone https://github.com/Francois-Popieul/dinopark.git
cd dinopark
```

2. **Installer les dépendances :**

```bash
npm install
```

3. **Configurer la base de données :**

```bash
Créer un fichier .env avec les variables suivantes :

DB_HOST=localhost
DB_PORT=5432
DB_NAME=dinopark
DB_USER=your_username
DB_PASSWORD=your_password
```

4. **Lancer le projet :**

```bash
npm start
```

Le site sera accessible sur http://localhost:3000

🦕 À propos

Projet réalisé dans le cadre d’une formation de Concepteur Développeur d’Applications chez Simplon Grenoble. L’objectif était de construire un site complet autour d’un univers ludique et captivant : les dinosaures 🦖 !
