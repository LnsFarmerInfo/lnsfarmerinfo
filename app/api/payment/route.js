import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import axios from "axios";
export async function POST(req, res) {
    let request = await req.json();
    console.log(request.courseCode)
    const transactionid = "LNS-" + uuidv4().toString(36).slice(-12);
    request = {...request,transactionid,passCode : "LNSFarmer0340%"}
    const payload = {
      merchantId: process.env.MERCHANT_ID,
      merchantTransactionId: transactionid,
      // amount: (request.courseCode.toString()[0] == '3' ? 2999:5999)*100,
      amount : 999,
      name: "Vinayak",
      redirectUrl: `http://localhost:3000/api/register?data=${JSON.stringify(request)}`,
      redirectMode: "POST",
      mobileNumber: "7727944259",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
      data : request
    };
  
    const dataPayload = JSON.stringify(payload);
  
    const dataBase64 = Buffer.from(dataPayload).toString("base64");
  
    const fullURL =
      dataBase64 + "/pg/v1/pay" + process.env.SALT_KEY;
    const dataSha256 = sha256(fullURL);
  
    const checksum = dataSha256 + "###" + process.env.SALT_INDEX.toString();
    console.log(checksum)
    const UAT_PAY_API_URL =
      "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";
  
    try {
      const response = await axios.post(
        process.env.PHONEPE_URL.toString(),
        {
          request: dataBase64,
          data : request
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            "X-VERIFY": checksum,
          },
        }
      );
      const redirect = response.data.data.instrumentResponse.redirectInfo.url;
      return NextResponse.json({ redirectUrl: redirect });
    } catch (e) {
      console.log(e);
      return NextResponse.json({ message: "failed" });
    }
  }