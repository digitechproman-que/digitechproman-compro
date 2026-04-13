import Link from "next/link";
import { Zap, Mail, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-green-500 to-emerald-400 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                DigiTech<span className="text-green-400">Project</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Solusi digital terjangkau untuk bisnis Anda. Kami hadir untuk
              mewujudkan ide menjadi produk nyata.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Menu</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact Us" },
                { href: "/services#kasir", label: "Digitech Point Of Sales" },
                { href: "/services#duitku", label: "Digitech Catatan Duitku" },
                { href: "/services#absenku", label: "Digitech HR" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-green-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Kontak</h3>
            <div className="flex items-center gap-2 text-sm mb-3">
              <Mail className="w-4 h-4 text-green-400 shrink-0" />
              <a
                href="mailto:digitechproman@gmail.com"
                className="hover:text-green-400 transition-colors"
              >
                digitechproman@gmail.com
              </a>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="#"
                className="w-8 h-8 bg-slate-800 hover:bg-green-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} DigiTechProject. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
