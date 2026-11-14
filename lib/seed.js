export const seedCategories=[
 {name:"Portrait",slug:"portrait",description:"Portraits studio & lifestyle qui révèlent votre personnalité",icon:"◉",sort_order:1},
 {name:"Événement",slug:"evenement",description:"Anniversaires, soirées, cérémonies : l'émotion sur le vif",icon:"✦",sort_order:2},
 {name:"Corporate",slug:"corporate",description:"Conférences, meetups, image de marque entreprise",icon:"◆",sort_order:3},
 {name:"Mariage",slug:"mariage",description:"Le plus beau jour, raconté en images intemporelles",icon:"♥",sort_order:4},
 {name:"Famille",slug:"famille",description:"Grossesse, famille, enfants : vos souvenirs précieux",icon:"⬢",sort_order:5},
 {name:"Mode & Produit",slug:"mode-produit",description:"Mode, marques & produits qui se vendent en image",icon:"⬣",sort_order:6},
];
const ph=(title,image_url,category_slug,featured=false)=>({title,image_url,category_slug,description:"",featured,sort_order:0});
export const seedPhotos=[
 ...Array.from({length:10},(_,i)=>ph(`Anniversaire 18 ans — ${i+1}`,`/images/evenement/anniv-${String(i+1).padStart(2,'0')}.jpg`,"evenement",i===0)),
 ...Array.from({length:10},(_,i)=>ph(`Meet'Up RH — ${i+1}`,`/images/corporate/corp-${String(i+1).padStart(2,'0')}.jpg`,"corporate",i===2)),
 ...Array.from({length:4},(_,i)=>ph(`Soirée & cinéma — ${i+1}`,`/images/soiree/soiree-${String(i+1).padStart(2,'0')}.jpg`,"evenement")),
];
export const seedPacks=[
 {
  "name": "Photo d'identité / Passeport",
  "category": "Photo Express",
  "price": 0,
  "currency": "FCFA",
  "duration": "Express",
  "description": "Vos photos officielles prêtes en quelques minutes",
  "features": [
   "4 photos d'identité",
   "Format passeport / officiel",
   "Fond aux normes",
   "Remise rapide"
  ],
  "popular": false,
  "sort_order": 1
 },
 {
  "name": "Photo CV / LinkedIn Pro",
  "category": "Photo Express",
  "price": 0,
  "currency": "FCFA",
  "duration": "Express",
  "description": "Une image professionnelle qui inspire confiance",
  "features": [
   "Fond blanc ou noir au choix",
   "Retouche professionnelle",
   "Format CV & LinkedIn",
   "Remise rapide"
  ],
  "popular": false,
  "sort_order": 2
 },
 {
  "name": "Shooting Solo",
  "category": "Studio Portrait",
  "price": 0,
  "currency": "FCFA",
  "duration": "30 min",
  "description": "Votre séance portrait individuelle en studio",
  "features": [
   "30 minutes de shooting",
   "5 photos retouchées",
   "Conseils poses & tenue",
   "Livraison galerie en ligne"
  ],
  "popular": false,
  "sort_order": 3
 },
 {
  "name": "Shooting Duo / Couple",
  "category": "Studio Portrait",
  "price": 0,
  "currency": "FCFA",
  "duration": "45 min",
  "description": "À deux, en couple ou entre proches",
  "features": [
   "45 minutes de shooting",
   "10 photos retouchées",
   "Poses guidées à deux",
   "Livraison galerie en ligne"
  ],
  "popular": false,
  "sort_order": 4
 },
 {
  "name": "Pack Anniversaire / Maternité",
  "category": "Studio Portrait",
  "price": 0,
  "currency": "FCFA",
  "duration": "1 heure",
  "description": "Le pack fête & futurs parents, photo + vidéo",
  "features": [
   "1 heure de séance",
   "20 photos retouchées",
   "1 vidéo Réel 4K offerte",
   "Décor & ambiance personnalisés"
  ],
  "popular": false,
  "sort_order": 5
 },
 {
  "name": "Pack Essentiel",
  "category": "Mariage",
  "price": 0,
  "currency": "FCFA",
  "duration": "Jour du mariage",
  "description": "L'essentiel de votre grand jour, en images",
  "features": [
   "100 photos retouchées",
   "Clé USB incluse",
   "Reportage du jour J",
   "Galerie en ligne"
  ],
  "popular": false,
  "sort_order": 6
 },
 {
  "name": "Pack Premium",
  "category": "Mariage",
  "price": 0,
  "currency": "FCFA",
  "duration": "Jour du mariage",
  "description": "Photo + vidéo 4K + drone pour un souvenir complet",
  "features": [
   "200 photos retouchées",
   "1 vidéo 4K",
   "Teaser de 1 minute",
   "Plans de drone inclus",
   "Clé USB incluse"
  ],
  "popular": false,
  "sort_order": 7
 },
 {
  "name": "Mayo Signature",
  "category": "Mariage",
  "price": 0,
  "currency": "FCFA",
  "duration": "Jour du mariage",
  "description": "Notre formule mariage la plus prestigieuse",
  "features": [
   "300 photos retouchées",
   "Film de 15 min en 4K",
   "Album photo luxe",
   "Plans de drone inclus",
   "Clé USB incluse"
  ],
  "popular": false,
  "sort_order": 8
 },
 {
  "name": "Vidéo Pub 30s",
  "category": "Vidéo 4K Entreprise",
  "price": 0,
  "currency": "FCFA",
  "duration": "Tournage + montage",
  "description": "Pour boutiques, restaurants et commerces",
  "features": [
   "Vidéo publicitaire de 30 secondes",
   "Tournage sur place",
   "Montage professionnel",
   "Prête pour réseaux sociaux"
  ],
  "popular": false,
  "sort_order": 9
 },
 {
  "name": "Couverture Événement Entreprise",
  "category": "Vidéo 4K Entreprise",
  "price": 0,
  "currency": "FCFA",
  "duration": "Demi-journée",
  "description": "Conférences, meetups, lancements, soirées pro",
  "features": [
   "Couverture demi-journée",
   "Vidéo 4K",
   "Montage inclus",
   "Images des temps forts"
  ],
  "popular": false,
  "sort_order": 10
 },
 {
  "name": "Clip Musical Artiste",
  "category": "Vidéo 4K Entreprise",
  "price": 0,
  "currency": "FCFA",
  "duration": "Clip complet",
  "description": "Votre clip en qualité cinéma",
  "features": [
   "Tournage en 4K",
   "Étalonnage professionnel",
   "Montage rythmé",
   "Rendu prêt à diffuser"
  ],
  "popular": false,
  "sort_order": 11
 },
 {
  "name": "Pack Influenceuse / Commerçante",
  "category": "Vidéo 4K Entreprise",
  "price": 0,
  "currency": "FCFA",
  "duration": "Par mois",
  "description": "Du contenu TikTok régulier pour vendre plus",
  "features": [
   "10 vidéos TikTok par mois",
   "Tournage + montage",
   "Formats pensés pour vendre",
   "Suivi mensuel"
  ],
  "popular": false,
  "sort_order": 12
 }
];
export const seedTestimonials=[];
export const seedSettings={site_name:"Mayo Studio",tagline:"Figer le vrai, filmer l'avenir",hero_title:"Figer le vrai, filmer l'avenir",hero_text:"Figer le vrai, filmer l'avenir — photo express, portrait studio, mariage et vidéo 4K. Mayo Studio raconte votre histoire en images, partout au Bénin.",whatsapp:"2290145565653",phone:"+229 01 45 56 56 53",email:"contact@example.com",address:"Cotonou, Bénin",tiktok:"https://www.tiktok.com/@mayostudio.bj",maps_url:"https://share.google/95tXLiOI9sPQcp1QH",instagram:"https://www.instagram.com/mayostudio.bj",facebook:"https://www.facebook.com/mayostudio.bj",responsable:"CHOGNIKA G. Marius A.",hours:"Sur réservation",about_title:"L'histoire de Mayo Studio",about_text:"Fondé en 2026 et fort de 3 ans d'expérience derrière l'objectif, Mayo Studio est né d'une conviction : chaque histoire mérite d'être racontée en images, avec fiabilité. Sous la direction de CHOGNIKA G. Marius A., le studio s'est spécialisé dans la photo express, le portrait studio, le mariage et la vidéo 4K pour entreprises et créateurs. Notre différence ? Par notre fiabilité, nous racontons mieux votre histoire — nous tenons nos délais, nous tenons nos promesses, et nous figeons le vrai, pour filmer votre avenir."};
