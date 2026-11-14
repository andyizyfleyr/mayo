"use client";
import {Shell,wa,fmt} from '../site';
export default function Page(){
 return <Shell>{d=>{const s=d.settings;return <main className="k-rates"><section className="k-page-banner"><h1>Services & Tarifs</h1></section><section className="k-rates-inner"><div className="k-heading"><span className="k-badge">Nos prestations</span><h2>Choisissez votre <span className="k-gradient">formule</span></h2><p>Photo express, portrait studio, mariage et vidéo 4K. Contactez-nous pour connaître les tarifs et disponibilités.</p></div>
 {[...new Set(d.packs.map(x=>x.category))].map(cat=><section className="k-rate-group" key={cat}><h2>{cat}</h2><div className="k-rate-grid">{d.packs.filter(p=>p.category===cat).map(p=><article key={p.id} className="k-rate-card">{p.popular&&<span className="k-popular">POPULAIRE</span>}<h3>{p.name}</h3><div className="k-price">{p.price>0?<>{fmt(p.price)} <small>{p.currency}</small></>:'Sur devis'}</div><p>{p.duration}{p.duration&&p.description?' — ':''}{p.description}</p><ul>{(p.features||[]).map((f,i)=><li key={i}>{f}</li>)}</ul><a className="k-book" target="_blank" rel="noreferrer" href={wa(s,`Bonjour Mayo Studio, je souhaite le service « ${p.name} » (${p.category}). Quel est le tarif et vos disponibilités ?`)}>Réserver sur WhatsApp <span>↗</span></a></article>)}</div></section>)}
 </section></main>;}}</Shell>;
}
