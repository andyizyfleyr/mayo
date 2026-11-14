"use client";
import {Suspense,useState} from 'react';
import {useSearchParams} from 'next/navigation';
import {Shell,Head,wa,RESERVED,Loading} from '../site';
function Gallery({d}){
 const params=useSearchParams(); const [cat,setCat]=useState(params.get('cat')||'tout'); const [light,setLight]=useState(null); const s=d.settings;
 const galPhotos=d.photos.filter(p=>!RESERVED.has(p.image_url));
 const photos=cat==='tout'?galPhotos:galPhotos.filter(p=>p.category_slug===cat);
 return <section className="section"><div className="container"><Head k="Réalisations" t={<>Sélection de <span className="grad">réalisations</span></>} p="Chaque photo est affichée en entier, dans son format d'origine. Cliquez pour l'agrandir."/>
 <div className="filters"><button className={cat==='tout'?'on':''} onClick={()=>setCat('tout')}>Tout voir</button>{d.categories.map(c=><button key={c.id} className={cat===c.slug?'on':''} onClick={()=>setCat(c.slug)}>{c.name}</button>)}</div>
 {photos.length? <div className="gal">{photos.map(p=><figure key={p.id} className="gitem" onClick={()=>setLight(p)}><img src={p.image_url} alt={p.title} loading="lazy"/><figcaption className="gbody"><b>{p.title}</b><span className="tag">{p.category_slug}</span></figcaption></figure>)}</div>
 : <div className="card card-pad" style={{textAlign:'center'}}><h3>Bientôt en images…</h3><p>Demandez nos références pour cette catégorie sur WhatsApp.</p><br/><a className="btn btn-wa" target="_blank" href={wa(s,'Bonjour Mayo Studio, je souhaite vos références.')}>Demander sur WhatsApp</a></div>}
 {light&&<div className="lightbox" onClick={()=>setLight(null)}><img src={light.image_url}/><span>{light.title} — cliquez pour fermer</span></div>}
 </div></section>;
}
export default function Page(){return <Shell>{d=><Suspense fallback={<Loading/>}><Gallery d={d}/></Suspense>}</Shell>;}
