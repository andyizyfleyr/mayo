"use client";
import {Shell,Head} from '../site';
export default function Page(){
 return <Shell>{d=>{const s=d.settings; return <>
 <section className="section"><div className="container"><Head k="À propos" t={<>Derrière <span className="grad">l'objectif</span></>}/>
 <div className="cards c2" style={{alignItems:'center'}}><div><div className="card card-pad" style={{textAlign:"center",maxWidth:440,margin:"0 auto"}}><div style={{width:92,height:92,borderRadius:"50%",margin:"6px auto 14px",display:"grid",placeItems:"center",fontWeight:900,fontSize:"1.7rem",color:"#fff",background:"linear-gradient(135deg,var(--b1),var(--b2),var(--b3))"}}>CM</div><b style={{fontSize:"1.05rem"}}>CHOGNIKA G. Marius A.</b><div className="note">Fondateur & Responsable — Mayo Studio</div></div></div><div><h3 style={{fontSize:'1.55rem',marginTop:0}}>{s.about_title}</h3><p style={{color:'var(--t2)',lineHeight:1.85}}>{s.about_text}</p><div className="chips"><span className="chip">Anniversaires</span><span className="chip">Événements d’entreprise</span><span className="chip">Soirées</span><span className="chip">Basé au Bénin</span><span className="chip">Studio créé en 2026</span><span className="chip">3 ans d’expérience</span></div><div className="actions"><a className="btn btn-p" href="/contact">Travailler avec nous</a></div></div></div></div></section>
 <section className="section" style={{paddingTop:0}}><div className="container"><Head k="Reportages" t={<>Des événements <span className="grad">réels, photographiés par Mayo</span></>} p="Pas de photos de banque d'images : ce sont nos propres reportages, visibles en entier dans la galerie."/>
 <div className="cards c3">{[
  ['Meet’Up RH — 3e édition','Conférence entreprise','Panel, intervenants, public et networking : la couverture complète d’une journée de conférence.','/images/corporate/corp-08.jpg'],
  ['Anniversaire des 18 ans de Nectaire','Fête d’anniversaire','L’arrivée des invités, les gâteaux, les discours et la soirée : un reportage complet, du début à la fin.','/images/evenement/anniv-02.jpg'],
  ['Soirée cinéma','Soirée / avant-première','Arrivées, photocall et ambiance de soirée.','/images/soiree/soiree-03.jpg'],
 ].map((r,i)=><article key={i} className="card"><div className="cat-media"><img src={r[3]} alt={r[0]} loading="lazy"/></div><div className="card-pad"><span className="tag">{r[1]}</span><h3>{r[0]}</h3><p>{r[2]}</p><a className="more" href="/realisations">Voir les photos</a></div></article>)}</div>
 {d.testimonials.length>0 && <div style={{marginTop:22}}><div className="cards c2">{d.testimonials.map(t=><div key={t.id} className="card card-pad testi"><p>« {t.message} »</p><b>{t.name}</b><div className="note">{t.role}</div></div>)}</div></div>}
 </div></section>
 </>;}}</Shell>;
}
