import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import { Inter } from "next/font/google";

export const metadata = {
  title: "Qualigenix",
  description: "Qualigenix offers AR follow-up services in medical billing to maximize claim recovery, streamline reimbursements, and improve cash flow efficiency.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-general-sans">{children}</body>
    </html>
  );
}
