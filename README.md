# SocioPolix

Un atlas des idéologies politiques : idées clés, histoire, figures, œuvres, courants et critiques, avec des quiz pour apprendre.

Site statique sans dépendance ni étape de build. Il s'installe sur téléphone (ou sur ordinateur) comme une application et fonctionne hors ligne.

## Lancer en local

```bash
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

Ouvrir directement `index.html` fonctionne aussi, mais sans le mode hors ligne ni l'installation.

## Structure

| Fichier | Rôle |
| --- | --- |
| `index.html` | Coquille de la page (en-tête, pied de page) |
| `css/style.css` | Styles, thèmes clair et sombre |
| `js/data.js` | **Tout le contenu** : une entrée par idéologie |
| `js/app.js` | Navigation, affichage des fiches, frise, quiz |
| `manifest.webmanifest` | Nom, couleurs et icônes de l'application installée |
| `sw.js` | Service worker : mise en cache pour l'usage hors ligne |
| `icons/` | Icônes de l'application |

## Ajouter ou modifier du contenu

Tout se passe dans `js/data.js`. Le format de chaque champ est décrit en tête du fichier. Pour une nouvelle idéologie, copier un bloc existant, changer `id` (sans accent ni espace), puis remplir.

Les quiz combinent :

- les questions écrites à la main dans le champ `quiz` (la **première** réponse de `r` est la bonne, l'ordre est mélangé à l'affichage) ;
- des questions générées automatiquement à partir des dates, des œuvres, des figures et des courants.

Deux règles pour que les questions générées restent justes :

- la description d'une figure ne doit pas contenir son nom ;
- `proches` liste les idéologies voisines, qui ne seront jamais proposées comme mauvaise réponse (par exemple socialisme / communisme).

## Publier sur GitHub Pages

```bash
git init -b main
git add .
git commit -m "Première version de SocioPolix"
gh repo create SocioPolix --public --source=. --push
gh api -X POST repos/{owner}/SocioPolix/pages -f "source[branch]=main" -f "source[path]=/"
```

Le site est ensuite disponible à `https://<utilisateur>.github.io/SocioPolix/` après une à deux minutes.

## Installer sur téléphone

Une fois le site en ligne (l'installation exige HTTPS, ce que GitHub Pages fournit) :

- **Android (Chrome)** : ouvrir le site, menu ⋮ → **Ajouter à l'écran d'accueil** → **Installer**.
- **iPhone (Safari)** : bouton Partager → **Sur l'écran d'accueil**.

L'application s'ouvre alors en plein écran, avec une barre d'onglets en bas, et reste utilisable sans connexion.

## Mettre à jour le site

Après toute modification, incrémenter `VERSION` dans `sw.js` (`sociopolix-v1` → `sociopolix-v2`). Sans cela, les téléphones qui ont déjà installé l'application peuvent garder l'ancienne version en cache. Si un fichier est ajouté, l'inscrire aussi dans la liste `FICHIERS`.
