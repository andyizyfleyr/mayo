import './globals.css'; import Loader from './Loader';
export const metadata={title:'Mayo Studio — Figer le vrai, filmer l\u2019avenir',description:'Photo express, portrait studio, mariage et vidéo 4K au Bénin. Mayo Studio : figer le vrai, filmer l\u2019avenir.'};
export default function RootLayout({children}){return <html lang="fr"><body><Loader/>{children}</body></html>}
