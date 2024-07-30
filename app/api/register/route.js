import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

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
      axios.post(
        "https://certificate-generator-2v52.onrender.com/generate-certificate",
        {
          name : data.name,
          email : data.email,
          role : "Full Stack Intern",
          startDate : "30th Sept, 2029",
          usn : data.usn
        }
      ).then((resp) => console.log(resp.data.message))
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
