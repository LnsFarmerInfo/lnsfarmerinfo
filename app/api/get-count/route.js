import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
await connectDB();
export async function GET(req,res){
    const resp = await User.find()
    const jsonResponse = { count: resp.length };
    const nextResponse = NextResponse.json(jsonResponse);
    nextResponse.headers.set('Cache-Control', 'no-store');
    nextResponse.headers.set('Pragma', 'no-cache');
    return nextResponse;
}