import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

await connectDB();
export async function POST(req,res){
    console.log(req.nextUrl)
    const request = await req.formData();
    console.log(request)
    let data = req.nextUrl.searchParams.get('data')
    data = JSON.parse(data)
    console.log(data)
    if(data.passCode == 'LNSFarmer0340%'){
        delete data.passCode
        User.create(data)
        return redirect('/')
    }else{
        return NextResponse.json({Message : "sorry body!, i also know how to hack."})
    }
}