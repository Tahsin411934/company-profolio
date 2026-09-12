import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "AFT SOFT AND LIMITED | Build what's next",
  description:
    "AFT SOFT AND LIMITED designs and engineers digital products for teams ready to move with intent.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${manrope.className} overflow-x-hidden bg-white text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
