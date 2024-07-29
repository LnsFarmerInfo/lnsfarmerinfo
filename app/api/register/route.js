import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { generateAndSendPdf } from "@/utils/offerLetter";

await connectDB();
export async function POST(req, res) {
  let redirectPath = null;
  const request = await req.formData();
  let data = req.nextUrl.searchParams.get("data");
  data = JSON.parse(data);
  if (
    data.passCode == "lnsfarmerinternship" &&
    request.get("code") == "PAYMENT_SUCCESS" &&
    request.get("transactionId") == data.transactionid
  ) {
    delete data.passCode;
    try {
       generateAndSendPdf(
        data.firstName + " " + data.lastName,
        data.usn,
        "Backend Intern",
        "29th Sept,2024",
        data.email
      ).then((res) => console.log("mail sent"))
      await User.create(data);
      redirectPath = "/payment/success";
    } catch (e) {
      console.log(e);
      redirectPath = "/payment/failure";
    } finally {
      if (redirectPath) {
        return redirect(redirectPath);
      }
    }
  } else {
    return redirect("/payment/failure");
  }
}
