import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { FloatingWhatsApp } from "../../components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Register Your Store | AFT SOFT AND LIMITED",
  description:
    "Start your e-commerce store with AFT SOFT AND LIMITED. Register now and get your free subdomain instantly.",
};

export default function StoreRegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
}
