"use client";
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
export const wa=(s,m)=>`https://wa.me/${(s?.whatsapp||'').replace(/\D/g,'')}?text=${encodeURIComponent(m)}`;
export const fmt=n=>Number(n||0).toLocaleString('fr-FR');
export const RESERVED=new Set(['/images/portrait/boss.jpg','/images/evenement/anniv-01.jpg','/images/evenement/anniv-02.jpg','/images/evenement/anniv-04.jpg','/images/corporate/corp-01.jpg','/images/corporate/corp-03.jpg','/images/corporate/corp-08.jpg','/images/soiree/soiree-03.jpg']);
export function useData(){
  const [d,setD]=useState(null);
  useEffect(()=>{fetch('/api/data').then(r=>r.json()).then(setD).catch(()=>{})},[]);
  return d;
}
export const Head=({k,t,p})=><div className="shead"><div className="eyebrow">{k}</div><h2>{t}</h2>{p&&<p>{p}</p>}</div>;
export const Loading=()=><div style={{minHeight:'60vh',display:'grid',placeItems:'center'}}><div className="brand"><span className="dot"/>MAYO <span className="grad">STUDIO</span></div></div>;
const LINKS=[['/','Accueil'],['/realisations','Réalisations'],['/services','Services & Tarifs'],['/a-propos','À propos'],['/contact','Contact']];
export function Header({s}){
  const path=usePathname(); const [menu,setMenu]=useState(false);
  return <header className="k-header"><div className="k-nav"><Link className="k-brand" href="/" aria-label="Mayo Studio, accueil"><span>MAYO</span><span>STUDIO</span></Link><nav className={menu?'k-nav-links is-open':'k-nav-links'} id="main-navigation" aria-label="Navigation principale">{LINKS.map(([h,l])=><a key={h} href={h} className={path===h?'active':''} onClick={()=>setMenu(false)}>{l}</a>)}</nav><a className="k-nav-book" href={wa(s,'Bonjour Mayo Studio, je souhaite réserver une séance.')} target="_blank" rel="noreferrer">RÉSERVER ↗</a><button className="k-menu-toggle" type="button" aria-label={menu?'Fermer le menu':'Ouvrir le menu'} aria-controls="main-navigation" aria-expanded={menu} onClick={()=>setMenu(!menu)}><span/><span/><span/></button></div></header>;
}
export function Footer(){
  return <footer className="k-footer"><div className="k-footer-content"><div className="k-footer-links"><a href="/a-propos">À PROPOS</a><a href="/realisations">RÉALISATIONS</a><a href="/services">SERVICES & TARIFS</a></div><div className="k-footer-center"><Link className="k-brand" href="/"><span>MAYO</span><span>STUDIO</span></Link><p>FIGER LE VRAI,<br/> FILMER L’AVENIR</p><a href="/contact" className="k-footer-cta">PARLONS DE VOTRE PROJET ↗</a></div><div className="k-footer-links k-footer-right"><a href="/contact">CONTACT</a><a href="/services">RÉSERVATION</a><a href="/admin">ESPACE ADMIN</a></div></div><div className="k-footer-bottom"><span>© {new Date().getFullYear()} Mayo Studio — Tous droits réservés</span><span>Fait avec soin au Bénin</span></div></footer>;
}
export function FloatWA({s}){
  return <a className="floatwa" target="_blank" aria-label="WhatsApp" href={wa(s,'Bonjour Mayo Studio !')}><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.3.8-1.7 1.6-2.4 1.6-.6.1-1.4.2-4.7-1-4-1.6-6.5-5.6-6.7-5.9-.2-.3-1.6-2.1-1.6-4s.9-2.8 1.3-3.2c.3-.4.7-.5.9-.5h.7c.2 0 .5 0 .8.6l1 2.4c.1.2.1.4 0 .6l-.5.7c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.3 1.1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z"/></svg></a>;
}
export function Shell({children}){
  const d=useData();
  if(!d) return <Loading/>;
  return <><Header s={d.settings}/>{children(d)}<Footer/><FloatWA s={d.settings}/></>;
}
