"use client";
import {useEffect,useState} from 'react';
import {usePathname} from 'next/navigation';
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
  const path=usePathname();
  return <><div className="poster"/><div className="gridbg"/>
  <header><div className="container nav"><a className="brand" href="/"><span className="dot"/>MAYO <span className="grad">STUDIO</span></a>
  <nav>{LINKS.map(([h,l])=><a key={h} href={h} style={path===h?{color:'#fff',background:'#ffffff10'}:undefined}>{l}</a>)}</nav>
  <a className="btn btn-p sm" href={wa(s,'Bonjour Mayo Studio, je souhaite réserver une séance.')} target="_blank">Réserver</a></div></header></>;
}
export function Footer(){
  return <footer><div className="container" style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',gap:10}}><span className="brand" style={{fontSize:15}}><span className="dot"/>MAYO <span className="grad">STUDIO</span></span><span>© {new Date().getFullYear()} Mayo Studio — Tous droits réservés</span><a href="/admin">Espace admin →</a></div></footer>;
}
export function FloatWA({s}){
  return <a className="floatwa" target="_blank" aria-label="WhatsApp" href={wa(s,'Bonjour Mayo Studio !')}><svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.2 14.2c-.3.8-1.7 1.6-2.4 1.6-.6.1-1.4.2-4.7-1-4-1.6-6.5-5.6-6.7-5.9-.2-.3-1.6-2.1-1.6-4s.9-2.8 1.3-3.2c.3-.4.7-.5.9-.5h.7c.2 0 .5 0 .8.6l1 2.4c.1.2.1.4 0 .6l-.5.7c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.2 1.1 2.3 1.5 2.6 1.6.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.3 1.1c.3.2.5.3.6.4 0 .1 0 .7-.2 1.2Z"/></svg></a>;
}
export function Shell({children}){
  const d=useData();
  if(!d) return <Loading/>;
  return <><Header s={d.settings}/>{children(d)}<Footer/><FloatWA s={d.settings}/></>;
}
