import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
await connectDB();

export async function POST(req,res){
    const userDetails = await req.json();
    console.log(userDetails)
    // const user  = User.create({
    //     email : "Vinayaknawdhar003@gmail.com",
    //     password : "12345",
    //     firstName : "Vinayak",
    //     lastName : "Nawdhar",
    //     collegeName : "dsatm",
    //     semester: 6,
    //     courseCode : 31,
    //     phoneNumber : "7727944259"
    // })
    return NextResponse.json({message : "success"})
}

