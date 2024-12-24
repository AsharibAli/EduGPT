import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import OCIDProvider from "@/components/OCIDProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EduGPT 🔥| AI Assistant for EduChain Community & Developers ✨",
  description:
    "EduGPT aims to simplify blockchain data (AI Explorer) and build complex Web3 projects (For Developers). It explain everything in a simple, fun way, helping you learn and build awesome projects quickly and easily on EduChain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-7W3R38HRN4"
      ></Script>
      <Script id="google-analytics">
        {`
   window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7W3R38HRN4');
  `}
      </Script>
      <body className={inter.className}>
        <OCIDProvider>{children}</OCIDProvider>
      </body>
    </html>
  );
}
