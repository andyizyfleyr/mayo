import {cookies} from 'next/headers'; import {ADMIN_PASS} from '@/lib/auth';
export async function POST(req){const {password}=await req.json(); if(password!==ADMIN_PASS()) return Response.json({error:'Mot de passe incorrect'},{status:401}); (await cookies()).set('mayo_admin','ok-'+ADMIN_PASS(),{httpOnly:true,path:'/',maxAge:60*60*24*7}); return Response.json({ok:true})}
