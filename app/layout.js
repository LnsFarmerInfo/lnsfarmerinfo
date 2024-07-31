import { Inter } from "next/font/google";
import "./globals.css";
import "./resp.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LNS FarmerInfo LLP",
  description: "LNS Farmer Info LLP is an agricultural and livestock-centric enterprise founded in 2021 by the visionary duo, Dr. C Nandini and Mr. Shiva Sumanth Reddy. Rooted in a profound love for the land and its caretakers, we are dedicated to enhancing the well-being of farmers and their cherished livestock companions. Our journey is marked by innovation and compassion, driven by a mission to redefine modern farming practices. We are proud to announce that we have been officially recognized by the National Association for the Advancement of Veterinary Informatics and Computational (NAAVIC) India for our exceptional contributions to agriculture and livestock welfare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Spline+Sans+Mono:ital,wght@0,300..700;1,300..700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" type="image/x-icon" href="/assets/Logo.png"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
