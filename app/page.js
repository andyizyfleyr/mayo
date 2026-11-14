"use client";
import {useState} from 'react';
import {Shell,wa,RESERVED} from './site';

const HERO_PHOTOS=[
  ['/images/evenement/anniv-04.jpg','Portrait lors d’un événement'],
  ['/images/corporate/corp-03.jpg','Reportage corporate'],
  ['/images/evenement/anniv-01.jpg','Photographie d’anniversaire'],
  ['/images/corporate/corp-08.jpg','Photographie de conférence'],
  ['/images/soiree/soiree-03.jpg','Photographie de soirée'],
];
const ICONS=['◉','✧','◇','♡','✳','◈'];

export default function Home(){
 const [expanded,setExpanded]=useState(false);
 return <Shell>{d=>{const s=d.settings;
  const photos=d.photos.filter(p=>!RESERVED.has(p.image_url));
  const shown=expanded?photos:photos.slice(0,6);
  return <main className="kimono-home">
   <section className="k-hero" aria-label="Présentation de Mayo Studio">
    <div className="k-hero-copy"><span className="k-badge">Studio photo & vidéo · Bénin</span>
     <h1>Figer le vrai,<br/><span className="k-gradient">filmer l’avenir</span></h1>
     <p>{s.hero_text}</p>
     <div className="k-hero-actions"><a className="k-button k-primary" href={wa(s,'Bonjour Mayo Studio, je souhaite réserver une séance photo.')} target="_blank" rel="noreferrer">Réserver une séance <span>↗</span></a><a className="k-button" href="/realisations">Voir nos réalisations <span>↗</span></a></div>
    </div>
    <div className="k-carousel" aria-label="Aperçu des photographies du studio"><div className="k-carousel-track">{[...HERO_PHOTOS,...HERO_PHOTOS].map(([src,alt],i)=><div className="k-slide" key={i}><img src={src} alt={i<5?alt:''} aria-hidden={i>=5} /></div>)}</div></div>
   </section>
   <section className="k-section k-services" id="services"><div className="k-heading"><span className="k-badge">Notre savoir-faire</span><h2>Explorez nos<br/>services <span className="k-gradient">photographiques</span></h2><p>Du portrait aux grands événements, Mayo Studio raconte vos histoires en images, partout au Bénin.</p></div>
    <div className="k-service-grid">{d.categories.map((c,i)=><a className="k-service" href={`/realisations?cat=${encodeURIComponent(c.slug)}`} key={c.id}><span className="k-icon" aria-hidden="true">{ICONS[i%ICONS.length]}</span><h3>{c.name}</h3><p>{c.description}</p><span className="k-service-link">Découvrir <span>↗</span></span></a>)}</div>
   </section>
   <section className="k-section k-about" id="studio"><div className="k-about-copy"><span className="k-badge">À propos de Mayo Studio</span><h2>Vos histoires méritent<br/>d’être <span className="k-gradient">racontées</span></h2><p>{s.about_text}</p><div className="k-about-highlights"><div><span>✦</span><strong>Des images authentiques</strong><p>Portraits, reportages et moments de vie.</p></div><div><span>✦</span><strong>Un accompagnement humain</strong><p>De votre idée à la livraison de vos images.</p></div></div><a className="k-button" href="/a-propos">Découvrir le studio <span>↗</span></a></div><div className="k-about-media"><img src="/images/portrait/boss.jpg" alt="Marius A., responsable de Mayo Studio"/><div className="k-photo-label"><small>LE STUDIO</small><strong>Mayo Studio</strong><span>Cotonou, Bénin</span></div></div></section>
   <section className="k-section k-projects" id="projets"><div className="k-heading"><span className="k-badge">Nos réalisations</span><h2>Des instants qui<br/>deviennent des <span className="k-gradient">souvenirs</span></h2><p>Découvrez une sélection de reportages et de portraits réalisés par Mayo Studio.</p></div>
    {shown.length>0?<div className="k-project-grid">{shown.map(p=><a key={p.id} className="k-project" href={`/realisations?cat=${encodeURIComponent(p.category_slug||'')}`}><img src={p.image_url} alt={p.title||'Photographie Mayo Studio'} loading="lazy"/><div className="k-project-overlay"><span>{p.category_slug}</span><h3>{p.title}</h3></div></a>)}</div>:<p className="k-empty">Les nouvelles réalisations arrivent bientôt.</p>}
    {photos.length>6&&<button type="button" className="k-button k-load" onClick={()=>setExpanded(!expanded)}>{expanded?'Voir moins':'Charger plus de projets'} <span>{expanded?'↑':'↗'}</span></button>}
    <div className="k-all"><a className="k-text-link" href="/realisations">Voir toutes les réalisations ↗</a></div>
   </section>
   {d.testimonials?.length>0&&<section className="k-testimonials"><span className="k-quote">“</span><blockquote>« {d.testimonials[0].message} »</blockquote><strong>{d.testimonials[0].name}</strong><p>{d.testimonials[0].role}</p></section>}
   <section className="k-section k-contact"><div><span className="k-badge">Parlons de votre projet</span><h2>Créons ensemble<br/>vos plus beaux <span className="k-gradient">souvenirs</span></h2><p>Une idée, une date ou simplement une question ? Nous serons ravis d’échanger avec vous.</p></div><div className="k-contact-details"><div><small>Nous appeler</small><a href={`tel:${(s.phone||'').replace(/\s/g,'')}`}>{s.phone}</a></div><div><small>Notre studio</small><strong>{s.address}</strong></div><a className="k-button k-primary" href={wa(s,'Bonjour Mayo Studio, je souhaite discuter de mon projet.')} target="_blank" rel="noreferrer">Écrire sur WhatsApp <span>↗</span></a></div></section>
  </main>;
 }}</Shell>;
}
