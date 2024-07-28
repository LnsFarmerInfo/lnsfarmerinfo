import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

await connectDB();
export async function POST(req,res){
    const router = useRouter();
    const request = await req.formData();
    let data = req.nextUrl.searchParams.get('data')
    data = JSON.parse(data)
    console.log(request.get('transactionId'))
    console.log(data.transactionid)
    if(data.passCode == 'lnsfarmerinternship' && request.get('code') == 'PAYMENT_SUCCESS' && request.get('transactionId') == data.transactionid){
        delete data.passCode
        try{
           await User.create(data);
           console.log("hello")
           router.push('/payment/success')
        }catch(e){
            console.log("error --- " + e)
            return redirect('/payment/failure')
        }
    }else{
        return redirect('/payment/failure')
    }
}