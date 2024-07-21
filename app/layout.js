import { Inter } from "next/font/google";
import "./globals.css";
import "./resp.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LNS FarmerInfo LLP",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
