import "./globals.css";
import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import localFont from "next/font/local";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--hankenGrotesk",
  subsets: ["latin"],
});
const engraversGothicBT = localFont({
  src: "../../public/fonts/Engravers-Gothic-BT-Font.ttf",
  variable: "--engraversGothicBT",
});

const kelphyn = localFont({
  src: "../../public/fonts/Kelphyn-Regular.ttf",
  variable: "--kelphyn",
});

const trellis = localFont({
  src: "../../public/fonts/Trellis.ttf",
  variable: "--trellis",
});

const brand = localFont({
  src: "../../public/fonts/Brand.ttf",
  variable: "--brand",
});

export const metadata: Metadata = {
  title: "Blue Canyon Aviation",
  description:
    "Blue Canyon Aviation is a flight school in the foothills of Northern California.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${hankenGrotesk.variable} ${engraversGothicBT.variable} ${kelphyn.variable} ${trellis.variable} ${brand.variable}`}>
        {children}
      </body>
    </html>
  );
}
