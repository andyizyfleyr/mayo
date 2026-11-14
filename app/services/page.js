"use client";
import {Shell,Head,wa,fmt} from '../site';
export default function Page(){
 return <Shell>{d=>{const s=d.settings; return <section className="section"><div className="container"><Head k="Grille officielle" t={<>Nos services & <span className="grad">formules</span></>} p="Photo express, portrait studio, mariage et vidéo 4K. Les tarifs se demandent en un clic sur WhatsApp."/>
 {[...new Set(d.packs.map(x=>x.category))].map(catg=><div key={catg} style={{marginBottom:38}}><h3 style={{fontSize:'1.35rem',margin:'0 0 16px'}}>{catg}</h3><div className="cards c3">{d.packs.filter(p=>p.category===catg).map(p=><article key={p.id} className="card pack"><h3>{p.name}</h3><div className="price" style={{fontSize:'1.35rem'}}>{p.price>0? <>{fmt(p.price)} <small>{p.currency}</small></> : 'Tarif sur demande'}</div><p>{p.duration} — {p.description}</p><ul>{(p.features||[]).map((f,i)=><li key={i}>{f}</li>)}</ul><a className="btn btn-wa" style={{width:'100%'}} target="_blank" href={wa(s,`Bonjour Mayo Studio, je souhaite le service « ${p.name} » (${p.category}). Quel est le tarif et vos disponibilités ?`)}>Demander le tarif sur WhatsApp</a></article>)}</div></div>)}
 </div></section>;}}</Shell>;
}
