import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const footerLinks = ["Home", "About", "Services", "Portfolio", "Contact"];

function getLinkHref(label: string) {
  return label === "Home" ? "#top" : `#${label.toLowerCase()}`;
}

export function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Link
              className="relative block h-16 w-56 overflow-hidden"
              href="#top"
            >
              <Image
                className="object-contain object-left brightness-125 contrast-125 saturate-150 [mix-blend-mode:screen]"
                src="/aft-logo.png"
                alt="AFT SOFT AND LIMITED"
                fill
                sizes="224px"
              />
            </Link>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-slate-300">
              Reliable web, mobile, software, and digital solutions for modern
              businesses ready to grow with technology.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
              Quick Links
            </h2>
            <nav className="mt-5 grid gap-3">
              {footerLinks.map((link) => (
                <Link
                  className="text-sm text-slate-300 transition-colors hover:text-emerald-400"
                  href={getLinkHref(link)}
                  key={link}
                >
                  {link}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-400">
              Contact
            </h2>
            <div className="mt-5 grid gap-4 text-sm text-slate-300">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-emerald-400" />
                info@aftsoft.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-emerald-400" />
                +880 1700-000000
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-emerald-400" />
                Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 AFT SOFT AND LIMITED. All rights reserved.</p>
          <p>Technology | People | Possibilities</p>
        </div>
      </div>
    </footer>
  );
}
