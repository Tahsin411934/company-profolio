import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { saasProductList } from "../lib/saas-products";

const services = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Solutions",
  "UI/UX Design",
  "Digital Marketing",
  "IT Consultation",
];
export function Footer() {
  return (
    <footer id="contact" className="bg-[#0b1938] text-white">
      <div className="site-container pb-24 pt-16 sm:pb-10">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link className="relative block h-14 w-56" href="/">
              <Image
                className="object-contain object-left"
                src="/aft-navbar-logo-clean.png"
                alt="AFT SOFT AND LIMITED"
                fill
                sizes="224px"
              />
            </Link>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-slate-300">
              Reliable web, mobile, software, and digital solutions for modern
              businesses ready to grow with technology.
            </p>
            <div className="mt-7 space-y-4 text-base text-slate-300">
              {/* Existing contact address retained; confirm domain mismatch with aftsoftandlimited.com before changing. */}
              <a
                className="flex items-center gap-3 hover:text-white"
                href="mailto:info@aftsoft.com"
              >
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                info@aftsoft.com
              </a>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="tel:+8801323814588"
              >
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                01323814588
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />
                Dhaka, Bangladesh
              </p>
              <a
                className="flex items-center gap-3 hover:text-white"
                href="https://wa.me/8801323814588"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 text-emerald-400" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-[0.7fr_1fr_1.2fr]">
            <nav aria-label="Company">
              <h2 className="text-base font-bold text-white">Company</h2>
              <div className="mt-5 grid gap-4">
                {["Home", "About", "Services", "Career", "Contact"].map(
                  (label) => (
                    <Link
                      key={label}
                      className="text-base text-slate-300 transition-colors hover:text-emerald-300"
                      href={
                        label === "Career"
                          ? "/career"
                          : label === "Home"
                            ? "/"
                            : `/#${label.toLowerCase()}`
                      }
                    >
                      {label}
                    </Link>
                  ),
                )}
              </div>
            </nav>
            <nav aria-label="Products">
              <h2 className="text-base font-bold text-white">Products</h2>
              <div className="mt-5 grid gap-4">
                {saasProductList.map((product) => (
                  <Link
                    key={product.slug}
                    className="text-base leading-relaxed text-slate-300 transition-colors hover:text-emerald-300"
                    href={product.productUrl}
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </nav>
            <nav aria-label="Services" className="col-span-2 sm:col-span-1">
              <h2 className="text-base font-bold text-white">Services</h2>
              <div className="mt-5 grid gap-4">
                {services.map((service) => (
                  <Link
                    key={service}
                    className="text-base text-slate-300 transition-colors hover:text-emerald-300"
                    href="/#services"
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs leading-relaxed text-slate-400 sm:flex-row sm:justify-between">
          <p>Copyright 2026 AFT SOFT AND LIMITED. All rights reserved.</p>
          <p>Technology | People | Possibilities</p>
        </div>
      </div>
    </footer>
  );
}
