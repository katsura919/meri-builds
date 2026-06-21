import type { Metadata } from "next";
import { Fredoka, Baloo_2, Gabarito, Poppins } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  weight: "600",
  variable: "--font-fredoka",
  subsets: ["latin"],
});

const baloo2 = Baloo_2({
  weight: "700",
  variable: "--font-baloo2",
  subsets: ["latin"],
});

const gabarito = Gabarito({
  weight: "800",
  variable: "--font-gabarito",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meri - AI Practitioner & Solopreneur",
  description: "I help non-technical business owners and virtual assistants use AI to actually make their work easier.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} ${baloo2.variable} ${gabarito.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
