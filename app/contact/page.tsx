"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

type FormState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", kebutuhan: "", pesan: "" });
  const [errors, setErrors] = useState<Partial<typeof form>>({});

  const kebutuhanOptions = [
    t.need_web, t.need_mobile, t.need_enterprise, t.need_pos,
    t.need_membership, t.need_hris, t.need_wms, t.need_social,
    t.need_consult, t.need_other,
  ];

  const validate = () => {
    const e: Partial<typeof form> = {};
    if (!form.name.trim()) e.name = t.val_name;
    if (!form.email.trim()) e.email = t.val_email_req;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t.val_email_fmt;
    if (!form.kebutuhan) e.kebutuhan = t.val_need;
    if (!form.pesan.trim()) e.pesan = t.val_msg;
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", kebutuhan: "", pesan: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const contactItems = [
    { icon: <Mail className="w-5 h-5 text-green-500" />, label: t.contact_label_email, value: "digitechproman@gmail.com", href: "mailto:digitechproman@gmail.com" },
    { icon: <Phone className="w-5 h-5 text-green-500" />, label: t.contact_label_wa, value: "+628-", href: "#" },
    { icon: <MapPin className="w-5 h-5 text-green-500" />, label: t.contact_label_loc, value: "Tangerang, Indonesia", href: "#" },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block px-4 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-6">
            {t.contact_badge}
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-5">
            {t.contact_h1a}{" "}
            <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
              {t.contact_h1b}
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-lg text-slate-500 max-w-xl mx-auto">
            {t.contact_p}
          </motion.p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left – info */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">{t.contact_info_h2}</h2>
                <p className="text-slate-500 text-sm leading-relaxed">{t.contact_info_p}</p>
              </div>

              {contactItems.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium mb-1">{item.label}</p>
                    <a href={item.href} className="text-slate-700 font-semibold hover:text-green-600 transition-colors text-sm">
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl text-white">
                <h3 className="font-bold text-lg mb-2">{t.contact_consult_h3}</h3>
                <p className="text-green-100 text-sm leading-relaxed">{t.contact_consult_p}</p>
              </div>
            </motion.div>

            {/* Right – form */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="lg:col-span-3">
              {formState === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16 px-6 bg-green-50 rounded-3xl border border-green-100">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{t.contact_success_h3}</h3>
                  <p className="text-slate-500 mb-6 max-w-sm">{t.contact_success_p}</p>
                  <button onClick={() => setFormState("idle")}
                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">
                    {t.contact_success_btn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 rounded-3xl p-8 border border-slate-100" noValidate>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">{t.contact_form_h2}</h2>

                  {formState === "error" && (
                    <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      {t.contact_error}
                    </div>
                  )}

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.contact_form_name} <span className="text-red-400">*</span>
                      </label>
                      <input type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder={t.contact_form_name_ph}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all ${errors.name ? "border-red-400" : "border-slate-200"}`} />
                      {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.contact_form_email} <span className="text-red-400">*</span>
                      </label>
                      <input type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder={t.contact_form_email_ph}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all ${errors.email ? "border-red-400" : "border-slate-200"}`} />
                      {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Kebutuhan */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.contact_form_need} <span className="text-red-400">*</span>
                      </label>
                      <select name="kebutuhan" value={form.kebutuhan} onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all appearance-none cursor-pointer ${errors.kebutuhan ? "border-red-400" : "border-slate-200"} ${!form.kebutuhan ? "text-slate-400" : ""}`}>
                        <option value="" disabled>{t.contact_form_need_ph}</option>
                        {kebutuhanOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-slate-800">{opt}</option>
                        ))}
                      </select>
                      {errors.kebutuhan && <p className="mt-1 text-xs text-red-500">{errors.kebutuhan}</p>}
                    </div>

                    {/* Pesan */}
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t.contact_form_msg} <span className="text-red-400">*</span>
                      </label>
                      <textarea name="pesan" value={form.pesan} onChange={handleChange}
                        placeholder={t.contact_form_msg_ph} rows={5}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition-all resize-none ${errors.pesan ? "border-red-400" : "border-slate-200"}`} />
                      {errors.pesan && <p className="mt-1 text-xs text-red-500">{errors.pesan}</p>}
                    </div>

                    <button type="submit" disabled={formState === "loading"}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-green-500 text-white font-bold rounded-xl shadow-md shadow-green-200 hover:bg-green-600 hover:shadow-green-300 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200">
                      {formState === "loading" ? (
                        <><Loader2 className="w-5 h-5 animate-spin" />{t.contact_form_sending}</>
                      ) : (
                        <><Send className="w-5 h-5" />{t.contact_form_btn}</>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
