import sha256 from "crypto-js/sha256";
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from "next/server";
import axios from "axios";
export async function POST(req, res) {
    let request = await req.json();
    request = {...request,passCode : "LNSFarmer0340%"}
    const transactionid = "LNS-" + uuidv4().toString(36).slice(-6);
    const payload = {
      merchantId: "PGTESTPAYUAT86",
      merchantTransactionId: transactionid,
      amount: 100000,
      name: "Vinayak",
      redirectUrl: `http://localhost:3000/api/register?data=${JSON.stringify(request)}`,
      callbackUrl : "https://google.com",
      redirectMode: "POST",
      mobileNumber: "9999999999",
      paymentInstrument: {
        type: "PAY_PAGE",
      },
    };
  
    const dataPayload = JSON.stringify(payload);
  
    const dataBase64 = Buffer.from(dataPayload).toString("base64");
  
    const fullURL =
      dataBase64 + "/pg/v1/pay" + "96434309-7796-489d-8924-ab56988a6076";
    const dataSha256 = sha256(fullURL);
  
    const checksum = dataSha256 + "###" + "1";
  
    const UAT_PAY_API_URL =
      "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
  
    try {
      const response = await axios.post(
        UAT_PAY_API_URL,
        {
          request: dataBase64,
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