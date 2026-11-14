"use client"; import {useEffect,useRef,useState} from 'react';
export default function Loader(){
 const [hidden,setHidden]=useState(false); const [gone,setGone]=useState(false); const bar=useRef(null);
 useEffect(()=>{
  let progress=0;
  const iv=setInterval(()=>{
    progress+=Math.random()*15; if(progress>100) progress=100;
    if(bar.current) bar.current.style.width=progress+'%';
    if(progress===100){ clearInterval(iv);
      setTimeout(()=>{ setHidden(true); setTimeout(()=>setGone(true),800); },500);
    }
  },200);
  return ()=>clearInterval(iv);
 },[]);
 if(gone) return null;
 const letters=['M','A','Y','O',null,'S','T','U','D','I','O'];
 return <div className={"loader-screen"+(hidden?" hidden":"")}>
  <div className="loader-logo">{letters.map((l,i)=> l? <span key={i} className="logo-letter">{l}</span> : <span key={i} className="logo-letter" style={{width:20}}></span>)}</div>
  <div className="loader-subtitle">Figer le vrai, filmer l'avenir</div>
  <div className="loader-progress"><div className="loader-progress-bar" ref={bar}></div></div>
  <div className="loader-dots"><div className="loader-dot"></div><div className="loader-dot"></div><div className="loader-dot"></div></div>
 </div>;
}
