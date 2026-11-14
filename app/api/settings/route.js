import {getSettings,updateSettings} from '@/lib/store'; import {requireAdmin} from '@/lib/auth';
export async function GET(){return Response.json(await getSettings())}
export async function PUT(req){const e=await requireAdmin(); if(e) return e; return Response.json(await updateSettings(await req.json()))}
