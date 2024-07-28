import puppeteer from "puppeteer";
import ejs from "ejs";
import fs from "fs";
import path from "path";
import { createCanvas } from "canvas";
import nodemailer from "nodemailer";

function generateWatermark(usn) {
  const width = 200; // Width of the image
  const height = 200; // Height of the image
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Set background color
  ctx.fillStyle = "transparent"; // White background
  ctx.fillRect(0, 0, width, height);

  // Draw watermark text
  ctx.font = "bold 30px Arial";
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Semi-transparent black
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.translate(width / 2, height / 2);
  ctx.rotate(-Math.PI / 4);
  ctx.fillText(usn.toUpperCase(), 0, 0);

  const base64Image = canvas.toDataURL("image/png");
  return base64Image;
}

async function generateCertificate(name, usn, position, startDate) {
  // Load the HTML template
  const templatePath = path.join(process.cwd(), "utils", "offerletter.ejs");
  const template = fs.readFileSync(templatePath, "utf-8");

  // Render the template with the provided name
  const html = ejs.render(template, {
    name,
    watermark: generateWatermark(usn),
    usn: usn.toUpperCase(),
    position,
    startDate,
  });
  let browser = null;
  // Launch Puppeteer to convert HTML to PDF
  if (process.env.puppeteer_path) {
     browser = await puppeteer.launch({
      executablePath:
        "/.cache/puppeteer/chrome/linux-127.0.6533.72/chrome-linux64/chrome",
    });
  }else{
    browser = await puppeteer.launch();
  }
  const page = await browser.newPage();

  await page.setContent(html);
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: {
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px",
    },
    scale: 1, // Adjust scale if necessary
    width: "210mm", // A4 width
    height: "297mm",
  });

  await browser.close();
  return pdfBuffer;
  // Save the PDF to a file
  // const outputPath = path.join(__dirname, `offerletter_${usn}.pdf`);
  // fs.writeFileSync(outputPath, pdfBuffer);

  // console.log(`Certificate generated: ${outputPath}`);
}
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service
  auth: {
    user: "vinayaknawdhar003@gmail.com",
    pass: "hjxmryqcdvbckcfv",
  },
});

export async function generateAndSendPdf(name, usn, role, startDate, email) {
  const mailOptions = {
    from: "vinayaknawdhar003@gmail.com",
    to: email,
    subject: "Offer Letter - LNS FarmerInfo LLP",
    text: `Dear ${name},

We’re excited to extend this offer to join our team as an intern! Attached, you’ll find the official offer letter with details about your role and start date. We’re thrilled to have you on board and are confident that you’ll make valuable contributions while gaining meaningful experience.

Please review the offer letter and let us know if you have any questions. Once you're ready to proceed, Just reply 'Confirm' to this mail.

Welcome to the team! We look forward to working with you.

Best regards,
Vinayak Nawdhar
LNS FarmerInfo LLP
+91 7727944259`,
    attachments: [
      {
        filename: `offerletter_${usn}.pdf`,
        content: await generateCertificate(name, usn, role, startDate),
        encoding: "base64", // optional, but you can specify encoding
      },
    ],
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}
