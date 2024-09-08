// import sha256 from "crypto-js/sha256";
// import { v4 as uuidv4 } from 'uuid';
// import { NextResponse } from "next/server";
// import User from "@/models/User";
// import axios from "axios";
// import { connectDB } from "@/lib/mongodb";
// export async function POST(req, res) {
//     await connectDB();
//     let request = await req.json();
//     const user = await User.findOne({'email' : request.email})
//     if(user){
//       return NextResponse.json({message : "user already exists"});
//     }
//     const transactionid = "LNS-" + uuidv4().toString(36).slice(-12);
//     request = {...request,transactionid,passCode : "lnsfarmerinternship"}
//     const payload = {
//       merchantId: process.env.MERCHANT_ID,
//       merchantTransactionId: transactionid,
//       amount: 999*100,
//       // amount : 100,
//       name: request.firstName + request.lastName,
//       redirectUrl: `${process.env.REDIRECT_URL}/api/register?data=${JSON.stringify(request)}`,
//       redirectMode: "POST",
//       mobileNumber: request.phoneNumber,
//       paymentInstrument: {
//         type: "PAY_PAGE",
//       },
//       data : request
//     };
  
//     const dataPayload = JSON.stringify(payload);
  
//     const dataBase64 = Buffer.from(dataPayload).toString("base64");
  
//     const fullURL =
//       dataBase64 + "/pg/v1/pay" + process.env.SALT_KEY;
//     const dataSha256 = sha256(fullURL);
  
//     const checksum = dataSha256 + "###" + process.env.SALT_INDEX.toString();

//     const UAT_PAY_API_URL =
//       "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";
  
//     try {
//       const response = await axios.post(
//         process.env.PHONEPE_URL.toString(),
//         {
//           request: dataBase64,
//           data : request
//         },
//         {
//           headers: {
//             accept: "application/json",
//             "Content-Type": "application/json",
//             "X-VERIFY": checksum,
//           },
//         }
//       );
//       const redirect = response.data.data.instrumentResponse.redirectInfo.url;
//       return NextResponse.json({ redirectUrl: redirect });
//     } catch (e) {
//       console.log(e);
//       return NextResponse.json({ message: "failed" });
//     }
//   }