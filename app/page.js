"use client";
import {Shell,Head,wa,RESERVED} from './site';
export default function Home(){
 return <Shell>{d=>{const s=d.settings;
 const catImg=c=>({'evenement':'/images/evenement/anniv-04.jpg','corporate':'/images/corporate/corp-01.jpg'})[c.slug]||null;
 return <>
 <div className="container"><div className="hero"><div>
  <h1>Figer le vrai, <em>filmer l'avenir</em></h1>
  <p className="lead">{s.hero_text}</p>
  <div className="actions"><a className="btn btn-wa" target="_blank" href={wa(s,'Bonjour Mayo Studio, je souhaite réserver une séance photo.')}>Réserver sur WhatsApp</a><a className="btn" href="/realisations">Voir nos réalisations</a></div>
 </div>
 <div className="hero-visual"><div className="hero-main"><img src="/images/portrait/boss.jpg" alt="Marius A. — Responsable de Mayo Studio"/></div><div className="hero-mini a"><img src="/images/evenement/anniv-01.jpg" alt="Événement"/></div><div className="hero-mini b"><img src="/images/corporate/corp-03.jpg" alt="Corporate"/></div><div className="hero-tag">Portrait · Événement · Entreprise</div></div>
 </div></div>
 <div className="marquee"><div>{Array(2).fill(['PORTRAIT','MARIAGE','ÉVÉNEMENT','CORPORATE','FAMILLE','MODE & PRODUIT']).flat().map((x,i)=><span key={i}>{x}</span>)}</div></div>
 <section id="univers" className="section"><div className="container"><Head k="Nos univers" t={<>Ce que nous photographions, <span className="grad">en images</span></>} p="Chaque univers correspond à des reportages réellement réalisés par le studio."/>
 <div className="cards c3">{d.categories.map(c=><a key={c.id} className="card" href={`/realisations?cat=${c.slug}`}><div>{catImg(c)?<div className="cat-media"><img src={catImg(c)} alt={c.name} loading="lazy"/></div>:<div className="cat-media" style={{display:'grid',placeItems:'center',background:'linear-gradient(135deg,rgba(107,92,255,.25),rgba(34,211,238,.18))',minHeight:150}}><span className="grad" style={{fontWeight:900,fontSize:'1.3rem',padding:24,textAlign:'center'}}>{c.name}</span></div>}</div><div className="card-pad"><h3>{c.name}</h3><p>{c.description}</p><span className="more">Voir les réalisations →</span></div></a>)}</div></div></section>
 <section className="section" style={{paddingTop:0}}><div className="container"><Head k="Processus" t={<>Comment se passe <span className="grad">une réservation</span></>} p="Du premier message à la remise des fichiers : voici, concrètement, comment nous travaillons."/>
 <div className="cards c3">{[['01','Échange & réservation','Votre projet sur WhatsApp : date, lieu, envies, pack. Devis clair, sans engagement.'],['02','La séance','Vous vivez le moment, nous capturons les émotions, les regards, les détails.'],['03','Retouche & livraison','Sélection et retouche professionnelles, galerie en ligne prête à partager.']].map(x=><div key={x[0]} className="card card-pad"><div className="stepnum">{x[0]}</div><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div>
 <div style={{textAlign:'center',marginTop:34}}><a className="btn btn-p" href="/services">Voir nos services & tarifs</a>{" "}<a className="btn" href="/contact">Nous contacter</a></div>
 </div></section>
 </>;}}</Shell>;
}
