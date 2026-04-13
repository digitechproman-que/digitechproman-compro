"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Server,
  CheckCircle2,
  Star,
  Users,
  Rocket,
  ShieldCheck,
  HeartHandshake,
  ChevronRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: <Code2 className="w-7 h-7 text-green-500" />,
    title: "Web Application",
    desc: "Bangun web app modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.",
  },
  {
    icon: <Smartphone className="w-7 h-7 text-green-500" />,
    title: "Mobile App",
    desc: "Aplikasi Android & iOS yang intuitif untuk menjangkau pelanggan di mana saja.",
  },
  {
    icon: <Server className="w-7 h-7 text-green-500" />,
    title: "Enterprise System",
    desc: "Sistem manajemen bisnis terintegrasi — ERP, HRM, POS, dan lebih banyak lagi.",
  },
];

const reasons = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-500" />,
    title: "Kualitas Terjamin",
    desc: "Setiap produk melewati pengujian ketat sebelum diserahkan.",
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-green-500" />,
    title: "Harga Terjangkau",
    desc: "Solusi profesional tanpa menguras kantong, cocok untuk UMKM hingga perusahaan besar.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-green-500" />,
    title: "Pengiriman Tepat Waktu",
    desc: "Timeline jelas dan transparan, Anda selalu tahu progres proyek.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    title: "Dukungan Penuh",
    desc: "Tim kami siap membantu sebelum, selama, dan setelah proyek selesai.",
  },
];

const products = [
  {
    name: "Digitech Point Of Sales",
    tag: "POS & Retail",
    desc: "Sistem kasir digital lengkap dengan manajemen stok, laporan penjualan real-time, dan multi-kasir.",
    href: "/services#kasir",
    color: "from-green-500 to-emerald-400",
  },
  {
    name: "Digitech Catatan Duitku",
    tag: "Keuangan Pribadi",
    desc: "Aplikasi pencatatan keuangan pribadi yang mudah, bantu kamu kelola pemasukan dan pengeluaran.",
    href: "/services#duitku",
    color: "from-emerald-500 to-teal-400",
  },
  {
    name: "Digitech HR",
    tag: "HR & Attendance",
    desc: "Sistem manajemen SDM berbasis web/mobile dengan absensi, laporan kehadiran otomatis, dan kelola cuti.",
    href: "/services#absenku",
    color: "from-teal-500 to-cyan-400",
  },
];

const stats = [
  { value: "50+", label: "Proyek Selesai" },
  { value: "30+", label: "Klien Puas" },
  { value: "3", label: "Produk Unggulan" },
  { value: "24/7", label: "Support" },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 via-white to-green-50">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-200/30 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0}
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
              >
                <Star className="w-4 h-4 fill-green-500 text-green-500" />
                Solusi Digital Terpercaya untuk Bisnis Anda
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
              >
                Wujudkan Ide Digital{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  Bersama Kami
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl"
              >
                DigiTechProject hadir sebagai mitra teknologi terpercaya — mulai
                dari web app, mobile app, hingga sistem enterprise. Profesional,
                terjangkau, dan tepat waktu.
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={3}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg shadow-green-200 hover:bg-green-600 hover:shadow-green-300 transition-all duration-200"
                >
                  Lihat Layanan
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-50 transition-all duration-200"
                >
                  Konsultasi Gratis
                </Link>
              </motion.div>
            </div>

            {/* Right floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-52 h-52 bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl rotate-12 shadow-2xl shadow-green-300 flex flex-col items-center justify-center text-white gap-2">
                    <Code2 className="w-12 h-12" />
                    <span className="font-bold text-lg">DigiTech</span>
                    <span className="text-sm opacity-80">Project</span>
                  </div>
                </div>
                {[
                  { label: "Web App", icon: <Code2 className="w-4 h-4" />, pos: "top-6 left-0" },
                  { label: "Mobile App", icon: <Smartphone className="w-4 h-4" />, pos: "top-6 right-0" },
                  { label: "Enterprise", icon: <Server className="w-4 h-4" />, pos: "bottom-6 left-8" },
                ].map((b, i) => (
                  <motion.div
                    key={b.label}
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
                    className={`absolute ${b.pos} flex items-center gap-2 bg-white rounded-xl px-4 py-3 shadow-lg shadow-slate-200 text-slate-700 font-medium text-sm`}
                  >
                    <span className="text-green-500">{b.icon}</span>
                    {b.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-green-500 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
              >
                <div className="text-4xl font-extrabold mb-1">{s.value}</div>
                <div className="text-green-100 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Apa yang Kami Tawarkan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Layanan Unggulan Kami
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Dari konsep hingga peluncuran, kami menemani setiap langkah perjalanan digital Anda.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="p-8 rounded-2xl border border-slate-100 hover:border-green-200 hover:shadow-xl hover:shadow-green-50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
              Produk Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              Solusi Siap Pakai untuk Bisnis Anda
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Produk-produk kami dirancang khusus untuk memenuhi kebutuhan nyata bisnis Indonesia.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div
                key={p.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${p.color}`} />
                <div className="p-8">
                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 bg-gradient-to-r ${p.color} text-white`}
                  >
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{p.name}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <Link
                    href={p.href}
                    className="inline-flex items-center gap-1 text-green-600 font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Pelajari lebih lanjut <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                Kenapa Memilih Kami
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6">
                Mitra Teknologi yang{" "}
                <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
                  Bisa Diandalkan
                </span>
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">
                Kami bukan sekadar vendor teknologi. Kami adalah mitra bisnis yang
                peduli terhadap kesuksesan Anda. Setiap keputusan kami didasarkan
                pada nilai kualitas, keterjangkauan, dan kepercayaan.
              </p>
              <ul className="space-y-3">
                {[
                  "Teknologi terkini dan best practice",
                  "Harga transparan tanpa biaya tersembunyi",
                  "Revisi hingga Anda puas",
                  "Support & maintenance jangka panjang",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-600 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid grid-cols-2 gap-5">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="p-6 rounded-2xl bg-slate-50 hover:bg-green-50 transition-colors border border-transparent hover:border-green-100"
                >
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm mb-4">
                    {r.icon}
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2 text-sm">{r.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-green-500 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
              Siap Mulai Proyek Digital Anda?
            </h2>
            <p className="text-green-100 text-lg mb-8 max-w-xl mx-auto">
              Ceritakan ide Anda kepada kami. Konsultasi pertama gratis dan tanpa
              komitmen.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-200"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
