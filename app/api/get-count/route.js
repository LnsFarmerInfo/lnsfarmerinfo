import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
await connectDB();
export async function GET(req,res){
    const resp = await User.find()
    return NextResponse.json({count : resp.length})
}