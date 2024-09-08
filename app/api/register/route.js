// import User from "@/models/User";
// import { connectDB } from "@/lib/mongodb";
// import { NextResponse } from "next/server";
// import { redirect } from "next/navigation";
// import axios from "axios";

// await connectDB();
// export async function POST(req, res) {
//   const courses = [
//     "Front-end Web Development Intern",
//     "Backend Web Development Intern",
//     "Full Stack Web Development Intern",
//     "Machine Learning Intern",
//   ];
//   let redirectPath = null;
//   const request = await req.formData();
//   let data = req.nextUrl.searchParams.get("data");
//   data = JSON.parse(data);
//   const courseIndex = Number(data.courseCode.toString()[0]) - 1;
//   if (
//     data.passCode == "lnsfarmerinternship" &&
//     request.get("code") == "PAYMENT_SUCCESS" &&
//     request.get("transactionId") == data.transactionid
//   ) {
//     delete data.passCode;
//     try {
//       if (courseIndex != 5) {
//         axios
//           .post(
//             "https://certificate-generator-2v52.onrender.com/generate-certificate",
//             {
//               name: data.firstName + " " + data.lastName,
//               email: data.email,
//               role: courses[courseIndex],
//               startDate: "9th Sept, 2024",
//               usn: data.usn,
//             }
//           )
//           .then((resp) => console.log(resp.data.message));
//       }
//       await User.create(data);
//       redirectPath = "/payment/success";
//     } catch (e) {
//       console.log(e);
//       redirectPath = "/payment/failure";
//     } finally {
//       if (redirectPath) {
//         return redirect(redirectPath);
//       }
//     }
//   } else {
//     return redirect("/payment/failure");
//   }
// }
