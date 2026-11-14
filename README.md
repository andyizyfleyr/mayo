# Mayo Studio — Next.js + Neon
Site vitrine + admin CRUD (catégories, photos, packs/tarifs, témoignages, réglages).
## Lancer
npm install && npm run dev  → site http://localhost:3000 • admin http://localhost:3000/admin (mot de passe par défaut: mayo-admin)
## Brancher Neon
1. Créer une base sur neon.tech (ou Vercel > Storage > Neon) 2. Copier .env.example en .env.local et coller DATABASE_URL + un vrai ADMIN_PASSWORD 3. Redémarrer : les tables et les données de démo sont créées automatiquement au 1er appel.
Sans DATABASE_URL, données locales dans data/store.json.
## Déployer sur Vercel
Importer le dossier, ajouter les env DATABASE_URL et ADMIN_PASSWORD, déployer.
