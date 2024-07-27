import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

await connectDB();
export async function POST(req,res){
    const request = await req.formData();
    let data = req.nextUrl.searchParams.get('data')
    console.log(data);
    data = JSON.parse(data)
    console.log(data)
    console.log(request.get('code'))
    if(data.passCode == 'lnsfarmerinternship' && request.get('code') == 'PAYMENT_SUCCESS'){
        delete data.passCode
        try{
            User.create(data)
        }catch(e){
            console.log(e.message)
        }
    }
    return redirect('/')
}