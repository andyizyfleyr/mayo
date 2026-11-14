import {cookies} from 'next/headers';
export const ADMIN_PASS=()=>process.env.ADMIN_PASSWORD||'mayo-admin';
export async function isAdmin(){ const c=await cookies(); return c.get('mayo_admin')?.value===('ok-'+ADMIN_PASS()); }
export async function requireAdmin(){ if(!(await isAdmin())) return Response.json({error:'Non autorisé'},{status:401}); return null; }
