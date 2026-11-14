"use client";
import {Shell,Head,wa} from '../site';
const FAQ=[['Comment réserver une séance ?','Écrivez-nous sur WhatsApp ou appelez le studio : nous convenons ensemble de la date, du lieu et de la formule.'],['Quels sont vos tarifs ?','Chaque formule est détaillée dans la page Services & Tarifs. Le tarif exact de votre service vous est confirmé sur WhatsApp selon votre projet.'],['Quel est le délai de livraison ?','Le délai exact vous est confirmé sur WhatsApp au moment de la réservation, selon le type de reportage.'],['Vous déplacez-vous hors de Cotonou ?','Précisez le lieu de votre événement dans votre message WhatsApp : nous vous confirmerons la faisabilité et les conditions.'],['Que comprend une formule mariage ?','Selon la formule : photos retouchées, vidéo 4K, teaser, drone, album photo luxe… Le détail complet est dans la page Services & Tarifs.'],['Comment se déroule un shooting studio ?','Sur réservation uniquement : vous choisissez votre formule (solo, duo, anniversaire/maternité), nous vous guidons pendant la séance, puis vous recevez vos photos retouchées.']];
export default function Page(){
 return <Shell>{d=>{const s=d.settings; return <>
 <section className="section"><div className="container"><div className="cta"><div className="eyebrow">Contact & réservation</div><h2 style={{fontSize:'clamp(1.75rem,3vw,2.55rem)',margin:'.3em 0'}}>Réserver une séance ou <span className="grad">demander un tarif</span></h2>
 <p style={{color:'var(--t3)'}}>Responsable : {s.responsable||'Mayo Studio'}<br/>{s.address} &nbsp;•&nbsp; Horaires : {s.hours||'Sur réservation'}<br/>Téléphone : {s.phone}</p>
 <div className="actions" style={{justifyContent:'center'}}><a className="btn btn-wa" target="_blank" href={wa(s,'Bonjour Mayo Studio, parlons de mon projet photo !')}>Écrire sur WhatsApp</a><a className="btn" href={'tel:+'+(s.whatsapp||'').replace(/\D/g,'')}>Téléphone : Appeler le studio</a><a className="btn" target="_blank" href={s.maps_url||'https://www.google.com/maps?q=Mayo+Studio,+Cotonou'}>Itinéraire Google Maps</a></div></div>
 <div style={{marginTop:22,borderRadius:20,overflow:'hidden',border:'1px solid var(--border)',boxShadow:'var(--sh1)'}}><iframe title="Mayo Studio — Bénin" src="https://www.google.com/maps?q=Mayo+Studio,+Cotonou,+B%C3%A9nin&output=embed" style={{width:'100%',height:340,border:0,display:'block'}} loading="lazy"/></div>
 </div></section>
 <section className="section" style={{paddingTop:0}}><div className="container"><Head k="FAQ" t={<>Questions <span className="grad">fréquentes</span></>}/>
 <div className="cards c2">{FAQ.map((f,i)=><div key={i} className="card card-pad"><h3 style={{marginTop:0}}>{f[0]}</h3><p>{f[1]}</p></div>)}</div>
 </div></section>
 </>;}}</Shell>;
}
