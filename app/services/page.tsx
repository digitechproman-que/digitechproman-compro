"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart,
  BarChart3,
  Package,
  Users,
  Layers,
  Printer,
  Wallet,
  TrendingUp,
  PiggyBank,
  Target,
  Bell,
  CalendarCheck,
  Clock,
  FileText,
  UserCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

const kasirFeatures = [
  { icon: <ShoppingCart className="w-5 h-5" />, label: "Transaksi cepat & mudah" },
  { icon: <Package className="w-5 h-5" />, label: "Manajemen stok real-time" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Laporan penjualan harian/bulanan" },
  { icon: <Users className="w-5 h-5" />, label: "Multi-kasir & multi-outlet" },
  { icon: <Layers className="w-5 h-5" />, label: "Manajemen kategori produk" },
  { icon: <Printer className="w-5 h-5" />, label: "Cetak struk & invoice otomatis" },
];

const duitkuFeatures = [
  { icon: <Wallet className="w-5 h-5" />, label: "Catat pemasukan & pengeluaran" },
  { icon: <TrendingUp className="w-5 h-5" />, label: "Grafik keuangan interaktif" },
  { icon: <PiggyBank className="w-5 h-5" />, label: "Target tabungan & anggaran" },
  { icon: <Target className="w-5 h-5" />, label: "Kategorisasi transaksi otomatis" },
  { icon: <Bell className="w-5 h-5" />, label: "Pengingat tagihan & cicilan" },
  { icon: <BarChart3 className="w-5 h-5" />, label: "Laporan bulanan komprehensif" },
];

const absenFeatures = [
  { icon: <CalendarCheck className="w-5 h-5" />, label: "Absensi via web & mobile" },
  { icon: <Clock className="w-5 h-5" />, label: "Rekap jam kerja otomatis" },
  { icon: <FileText className="w-5 h-5" />, label: "Laporan kehadiran bulanan" },
  { icon: <UserCheck className="w-5 h-5" />, label: "Manajemen izin & cuti online" },
  { icon: <Users className="w-5 h-5" />, label: "Multi-departemen & jabatan" },
  { icon: <Lock className="w-5 h-5" />, label: "Keamanan data karyawan" },
];

function ProductCard({
  id,
  tag,
  tagColor,
  title,
  subtitle,
  desc,
  features,
  gradient,
  reversed = false,
  index,
}: {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  subtitle: string;
  desc: string;
  features: { icon: React.ReactNode; label: string }[];
  gradient: string;
  reversed?: boolean;
  index: number;
}) {
  return (
    <section id={id} className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${reversed ? "lg:flex-row-reverse" : ""}`}>
          {/* Visual */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={reversed ? "order-2 lg:order-1" : "order-2 lg:order-2"}
          >
            <div className={`rounded-3xl bg-gradient-to-br ${gradient} p-10 shadow-2xl text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4">
                  {tag}
                </span>
                <h3 className="text-3xl font-extrabold mb-3">{title}</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{subtitle}</p>
                <div className="grid grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f.label} className="flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2">
                      <span className="text-white/80 shrink-0">{f.icon}</span>
                      <span className="text-xs font-medium leading-tight">{f.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className={reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"}
          >
            <span className={`inline-block px-4 py-1 ${tagColor} rounded-full text-sm font-medium mb-4`}>
              {tag}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
              {title}
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">{desc}</p>
            <ul className="space-y-3 mb-8">
              {features.slice(0, 4).map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  {f.label}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md shadow-green-200 hover:bg-green-600 transition-all"
            >
              Tanya Harga
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6"
          >
            Produk & Layanan
          </motion.div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6"
          >
            Solusi Digital yang{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              Kami Hadirkan
            </span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg text-slate-500 max-w-2xl mx-auto"
          >
            Tiga produk unggulan kami dirancang untuk memecahkan masalah nyata
            bisnis dan kehidupan sehari-hari — terjangkau dan mudah digunakan.
          </motion.p>
        </div>

        {/* Quick nav */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="max-w-2xl mx-auto px-4 mt-12 flex flex-wrap gap-3 justify-center"
        >
          {[
            { href: "#kasir", label: "Digitech Point Of Sales" },
            { href: "#duitku", label: "Digitech Catatan Duitku" },
            { href: "#absenku", label: "Digitech HR" },
          ].map((nav) => (
            <a
              key={nav.href}
              href={nav.href}
              className="px-5 py-2 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all text-sm"
            >
              {nav.label}
            </a>
          ))}
        </motion.div>
      </section>

      {/* Product 1 – Digitech Point Of Sales */}
      <ProductCard
        id="kasir"
        index={0}
        tag="POS & Retail"
        tagColor="bg-green-100 text-green-700"
        title="Digitech Point Of Sales"
        subtitle="Sistem kasir modern untuk bisnis retail Anda"
        desc="Digitech Point Of Sales adalah sistem Point of Sale (POS) berbasis web yang dirancang untuk mempermudah operasional toko, warung, dan bisnis retail. Nikmati kemudahan transaksi, pengelolaan stok, dan laporan bisnis dalam satu platform terintegrasi."
        features={kasirFeatures}
        gradient="from-green-500 to-emerald-400"
        reversed={false}
      />

      {/* Product 2 – Digitech Catatan Duitku */}
      <ProductCard
        id="duitku"
        index={1}
        tag="Keuangan Pribadi"
        tagColor="bg-emerald-100 text-emerald-700"
        title="Digitech Catatan Duitku"
        subtitle="Kelola keuanganmu dengan lebih cerdas"
        desc="Digitech Catatan Duitku adalah aplikasi manajemen keuangan pribadi yang membantu Anda mencatat, menganalisis, dan merencanakan keuangan dengan mudah. Dengan tampilan yang sederhana namun powerful, keuangan Anda jadi lebih teratur."
        features={duitkuFeatures}
        gradient="from-emerald-500 to-teal-400"
        reversed={true}
      />

      {/* Product 3 – Digitech HR */}
      <ProductCard
        id="absenku"
        index={2}
        tag="HR & Attendance"
        tagColor="bg-teal-100 text-teal-700"
        title="Digitech HR"
        subtitle="Sistem manajemen SDM modern & efisien"
        desc="Digitech HR adalah solusi manajemen sumber daya manusia berbasis cloud yang memudahkan pengelolaan absensi, izin, cuti, dan data karyawan. Cocok untuk bisnis skala kecil hingga menengah yang ingin kelola SDM lebih efisien."
        features={absenFeatures}
        gradient="from-teal-500 to-cyan-400"
        reversed={false}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-extrabold text-white mb-4">
              Butuh Solusi Custom?
            </h2>
            <p className="text-green-100 mb-8 text-lg">
              Kami juga menerima proyek web app, mobile app, dan enterprise system sesuai kebutuhan spesifik Anda.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-all"
            >
              Diskusikan Kebutuhan Anda
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
