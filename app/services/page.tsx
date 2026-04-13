"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShoppingCart, BarChart3, Package, Users, Layers, Printer,
  Wallet, TrendingUp, PiggyBank, Target, Bell,
  CalendarCheck, Clock, FileText, UserCheck, Lock,
  ArrowRight, CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

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
  askPrice,
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
  askPrice: string;
}) {
  return (
    <section id={id} className={`py-24 ${index % 2 === 0 ? "bg-white" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className={reversed ? "order-2 lg:order-1" : "order-2 lg:order-2"}
          >
            <div className={`rounded-3xl bg-gradient-to-br ${gradient} p-10 shadow-2xl text-white relative overflow-hidden`}>
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/4" />
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold mb-4">{tag}</span>
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
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
            className={reversed ? "order-1 lg:order-2" : "order-1 lg:order-1"}
          >
            <span className={`inline-block px-4 py-1 ${tagColor} rounded-full text-sm font-medium mb-4`}>{tag}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-500 leading-relaxed mb-8 text-lg">{desc}</p>
            <ul className="space-y-3 mb-8">
              {features.slice(0, 4).map((f) => (
                <li key={f.label} className="flex items-center gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                  {f.label}
                </li>
              ))}
            </ul>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-md shadow-green-200 hover:bg-green-600 transition-all">
              {askPrice} <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const { t } = useLanguage();

  const kasirFeatures = [
    { icon: <ShoppingCart className="w-5 h-5" />, label: t.feat_kasir1 },
    { icon: <Package className="w-5 h-5" />, label: t.feat_kasir2 },
    { icon: <BarChart3 className="w-5 h-5" />, label: t.feat_kasir3 },
    { icon: <Users className="w-5 h-5" />, label: t.feat_kasir4 },
    { icon: <Layers className="w-5 h-5" />, label: t.feat_kasir5 },
    { icon: <Printer className="w-5 h-5" />, label: t.feat_kasir6 },
  ];

  const duitkuFeatures = [
    { icon: <Wallet className="w-5 h-5" />, label: t.feat_duitku1 },
    { icon: <TrendingUp className="w-5 h-5" />, label: t.feat_duitku2 },
    { icon: <PiggyBank className="w-5 h-5" />, label: t.feat_duitku3 },
    { icon: <Target className="w-5 h-5" />, label: t.feat_duitku4 },
    { icon: <Bell className="w-5 h-5" />, label: t.feat_duitku5 },
    { icon: <BarChart3 className="w-5 h-5" />, label: t.feat_duitku6 },
  ];

  const absenFeatures = [
    { icon: <CalendarCheck className="w-5 h-5" />, label: t.feat_hr1 },
    { icon: <Clock className="w-5 h-5" />, label: t.feat_hr2 },
    { icon: <FileText className="w-5 h-5" />, label: t.feat_hr3 },
    { icon: <UserCheck className="w-5 h-5" />, label: t.feat_hr4 },
    { icon: <Users className="w-5 h-5" />, label: t.feat_hr5 },
    { icon: <Lock className="w-5 h-5" />, label: t.feat_hr6 },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            {t.svc_badge}
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-6">
            {t.svc_h1a}{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              {t.svc_h1b}
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg text-slate-500 max-w-2xl mx-auto">
            {t.svc_p}
          </motion.p>
        </div>

        {/* Quick nav */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
          className="max-w-2xl mx-auto px-4 mt-12 flex flex-wrap gap-3 justify-center">
          {[
            { href: "#kasir", label: "Digitech Point Of Sales" },
            { href: "#duitku", label: "Digitech Catatan Duitku" },
            { href: "#absenku", label: "Digitech HR" },
          ].map((nav) => (
            <a key={nav.href} href={nav.href}
              className="px-5 py-2 border-2 border-green-500 text-green-600 font-semibold rounded-full hover:bg-green-500 hover:text-white transition-all text-sm">
              {nav.label}
            </a>
          ))}
        </motion.div>
      </section>

      <ProductCard
        id="kasir" index={0}
        tag="POS & Retail" tagColor="bg-green-100 text-green-700"
        title="Digitech Point Of Sales"
        subtitle={t.svc_pos_subtitle} desc={t.svc_pos_desc}
        features={kasirFeatures} gradient="from-green-500 to-emerald-400"
        reversed={false} askPrice={t.svc_ask_price}
      />

      <ProductCard
        id="duitku" index={1}
        tag="Keuangan Pribadi" tagColor="bg-emerald-100 text-emerald-700"
        title="Digitech Catatan Duitku"
        subtitle={t.svc_duitku_subtitle} desc={t.svc_duitku_desc}
        features={duitkuFeatures} gradient="from-emerald-500 to-teal-400"
        reversed={true} askPrice={t.svc_ask_price}
      />

      <ProductCard
        id="absenku" index={2}
        tag="HR & Attendance" tagColor="bg-teal-100 text-teal-700"
        title="Digitech HR"
        subtitle={t.svc_hr_subtitle} desc={t.svc_hr_desc}
        features={absenFeatures} gradient="from-teal-500 to-cyan-400"
        reversed={false} askPrice={t.svc_ask_price}
      />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-extrabold text-white mb-4">{t.svc_cta_h2}</h2>
            <p className="text-green-100 mb-8 text-lg">{t.svc_cta_p}</p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-green-600 font-bold rounded-full text-lg shadow-xl hover:scale-105 transition-all">
              {t.svc_cta_btn} <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
