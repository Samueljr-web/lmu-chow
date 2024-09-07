import type { Metadata } from "next";
import { Saira, Secular_One, Seymour_One } from "next/font/google";
import "./globals.css";

const secularOne = Secular_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-secular-one",
});

const seymourOne = Seymour_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-seymour-one",
});
const saira = Saira({
  subsets: ["latin"],
  variable: "--font-saira",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});
export const metadata: Metadata = {
  title: "LMU CHOW",
  description: "Order cafeteria meals right from your hostel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${saira.variable} ${secularOne.variable} ${seymourOne.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
