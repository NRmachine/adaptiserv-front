# --- Étape 1 : Builder l'application Next.js ---
# Utilise une image Node.js Alpine pour la légèreté et la rapidité de build
FROM node:18-alpine AS builder

# Définit le répertoire de travail dans le conteneur.
# C'est ici que tous vos fichiers seront copiés et les commandes exécutées.
WORKDIR /app

# Copie les fichiers de configuration de package en premier pour optimiser le cache Docker.
# Si package.json ou package-lock.json ne changent pas, Docker peut réutiliser la couche suivante.
COPY package.json package-lock.json ./

# Installe toutes les dépendances du projet.
# 'npm ci' est utilisé pour des builds reproductibles, en se basant sur package-lock.json.
RUN npm ci

# Copie le reste des fichiers du projet dans le répertoire de travail.
# Cela inclut votre dossier `src`, `public`, et tous les fichiers de configuration.
COPY . .

# Exécute la commande de build de Next.js.
# Cela va créer le dossier `.next` avec les fichiers optimisés pour la production.
RUN npm run build

# --- Étape 2 : Créer l'image de production légère (Runtime) ---
# Utilise une image Node.js Alpine encore plus minimaliste pour l'exécution en production.
# Cela réduit considérablement la taille de l'image finale.
FROM node:18-alpine AS runner

# Définit le répertoire de travail dans l'image finale.
WORKDIR /app

# Définissez l'environnement de production.
# C'est crucial pour que Next.js et React activent les optimisations de production.
ENV NODE_ENV production

# Copie uniquement les artefacts essentiels de l'étape de construction précédente.
# - .next : Le dossier de build de Next.js.
# - public : Les fichiers statiques (images, fonts, etc.).
# - node_modules : Les dépendances nécessaires à l'exécution (minimale grâce à l'étape précédente).
# - package.json : Nécessaire pour 'npm start'.
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose le port par défaut de Next.js (3000).
# Cela indique aux utilisateurs et à Docker que le conteneur écoute sur ce port.
EXPOSE 3000

# Commande pour démarrer l'application Next.js en mode production.
# Cette commande sera exécutée lorsque le conteneur démarrera.
CMD ["npm", "start"]

# --- Bonnes pratiques additionnelles (optionnel) ---
# Si vous avez des fichiers sensibles ou des fichiers de développement, ajoutez-les à un .dockerignore
# pour éviter de les copier inutilement dans l'image. Un .dockerignore ressemblerait à :
# node_modules
# .git
# .env
# .env.local
# .DS_Store
# npm-debug.log
# yarn-error.log
# .next/cache