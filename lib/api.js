import {list,create,update,remove,getSettings,updateSettings} from './store';
import {requireAdmin} from './auth';
export function crud(col){ return {
 GET: async()=>Response.json(await list(col)),
 POST: async(req)=>{const e=await requireAdmin(); if(e) return e; return Response.json(await create(col,await req.json()),{status:201});},
 PUT: async(req)=>{const e=await requireAdmin(); if(e) return e; const b=await req.json(); return Response.json(await update(col,b.id,b));},
 DELETE: async(req)=>{const e=await requireAdmin(); if(e) return e; const {id}=await req.json(); await remove(col,id); return Response.json({ok:true});},
}}
