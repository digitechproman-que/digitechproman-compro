export type Lang = "id" | "en";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Translations = Record<string, string>;

const id: Translations = {
  // NAVBAR
  nav_home: "Home",
  nav_services: "Services",
  nav_cta: "Contact Us",

  // FOOTER
  footer_tagline: "Solusi digital terjangkau untuk bisnis Anda. Kami hadir untuk mewujudkan ide menjadi produk nyata.",
  footer_menu: "Menu",
  footer_contact: "Kontak",
  footer_visitors: "Pengunjung",
  footer_rights: "DigiTechProject. All rights reserved.",

  // HOME – Hero
  home_hero_badge: "Solusi Digital Terpercaya untuk Bisnis Anda",
  home_hero_h1a: "Wujudkan Ide Digital",
  home_hero_h1b: "Bersama Kami",
  home_hero_p: "DigiTechProject hadir sebagai mitra teknologi terpercaya — mulai dari web app, mobile app, hingga sistem enterprise. Profesional, terjangkau, dan tepat waktu.",
  home_hero_btn1: "Lihat Layanan",
  home_hero_btn2: "Konsultasi Gratis",

  // HOME – Stats
  home_stats_projects: "Proyek Selesai",
  home_stats_clients: "Klien Puas",
  home_stats_products: "Produk Unggulan",
  home_stats_support: "Support",

  // HOME – Services
  home_svc_badge: "Apa yang Kami Tawarkan",
  home_svc_h2: "Layanan Unggulan Kami",
  home_svc_p: "Dari konsep hingga peluncuran, kami menemani setiap langkah perjalanan digital Anda.",
  home_svc1_title: "Web Application",
  home_svc1_desc: "Bangun web app modern, responsif, dan scalable sesuai kebutuhan bisnis Anda.",
  home_svc2_title: "Mobile App",
  home_svc2_desc: "Aplikasi Android & iOS yang intuitif untuk menjangkau pelanggan di mana saja.",
  home_svc3_title: "Enterprise System",
  home_svc3_desc: "Sistem manajemen bisnis terintegrasi — ERP, HRM, POS, dan lebih banyak lagi.",

  // HOME – Products
  home_prod_badge: "Produk Kami",
  home_prod_h2: "Solusi Siap Pakai untuk Bisnis Anda",
  home_prod_p: "Produk-produk kami dirancang khusus untuk memenuhi kebutuhan nyata bisnis Indonesia.",
  home_prod1_tag: "POS & Retail",
  home_prod1_desc: "Sistem kasir digital lengkap dengan manajemen stok, laporan penjualan real-time, dan multi-kasir.",
  home_prod2_tag: "Keuangan Pribadi",
  home_prod2_desc: "Aplikasi pencatatan keuangan pribadi yang mudah, bantu kamu kelola pemasukan dan pengeluaran.",
  home_prod3_tag: "HR & Attendance",
  home_prod3_desc: "Sistem manajemen SDM berbasis web/mobile dengan absensi, laporan kehadiran otomatis, dan kelola cuti.",
  home_prod_learn: "Pelajari lebih lanjut",

  // HOME – Why Us
  home_why_badge: "Kenapa Memilih Kami",
  home_why_h2a: "Mitra Teknologi yang",
  home_why_h2b: "Bisa Diandalkan",
  home_why_p: "Kami bukan sekadar vendor teknologi. Kami adalah mitra bisnis yang peduli terhadap kesuksesan Anda. Setiap keputusan kami didasarkan pada nilai kualitas, keterjangkauan, dan kepercayaan.",
  home_why_c1: "Teknologi terkini dan best practice",
  home_why_c2: "Harga transparan tanpa biaya tersembunyi",
  home_why_c3: "Revisi hingga Anda puas",
  home_why_c4: "Support & maintenance jangka panjang",
  home_why_r1_title: "Kualitas Terjamin",
  home_why_r1_desc: "Setiap produk melewati pengujian ketat sebelum diserahkan.",
  home_why_r2_title: "Harga Terjangkau",
  home_why_r2_desc: "Solusi profesional tanpa menguras kantong, cocok untuk UMKM hingga perusahaan besar.",
  home_why_r3_title: "Pengiriman Tepat Waktu",
  home_why_r3_desc: "Timeline jelas dan transparan, Anda selalu tahu progres proyek.",
  home_why_r4_title: "Dukungan Penuh",
  home_why_r4_desc: "Tim kami siap membantu sebelum, selama, dan setelah proyek selesai.",

  // HOME – CTA
  home_cta_h2: "Siap Mulai Proyek Digital Anda?",
  home_cta_p: "Ceritakan ide Anda kepada kami. Konsultasi pertama gratis dan tanpa komitmen.",
  home_cta_btn: "Hubungi Kami Sekarang",

  // SERVICES – Hero
  svc_badge: "Produk & Layanan",
  svc_h1a: "Solusi Digital yang",
  svc_h1b: "Kami Hadirkan",
  svc_p: "Tiga produk unggulan kami dirancang untuk memecahkan masalah nyata bisnis dan kehidupan sehari-hari — terjangkau dan mudah digunakan.",

  // SERVICES – Products
  svc_pos_subtitle: "Sistem kasir modern untuk bisnis retail Anda",
  svc_pos_desc: "Digitech Point Of Sales adalah sistem Point of Sale (POS) berbasis web yang dirancang untuk mempermudah operasional toko, warung, dan bisnis retail. Nikmati kemudahan transaksi, pengelolaan stok, dan laporan bisnis dalam satu platform terintegrasi.",
  svc_duitku_subtitle: "Kelola keuanganmu dengan lebih cerdas",
  svc_duitku_desc: "Digitech Catatan Duitku adalah aplikasi manajemen keuangan pribadi yang membantu Anda mencatat, menganalisis, dan merencanakan keuangan dengan mudah. Dengan tampilan yang sederhana namun powerful, keuangan Anda jadi lebih teratur.",
  svc_hr_subtitle: "Sistem manajemen SDM modern & efisien",
  svc_hr_desc: "Digitech HR adalah solusi manajemen sumber daya manusia berbasis cloud yang memudahkan pengelolaan absensi, izin, cuti, dan data karyawan. Cocok untuk bisnis skala kecil hingga menengah yang ingin kelola SDM lebih efisien.",
  svc_ask_price: "Tanya Harga",

  // SERVICES – Features
  feat_kasir1: "Transaksi cepat & mudah",
  feat_kasir2: "Manajemen stok real-time",
  feat_kasir3: "Laporan penjualan harian/bulanan",
  feat_kasir4: "Multi-kasir & multi-outlet",
  feat_kasir5: "Manajemen kategori produk",
  feat_kasir6: "Cetak struk & invoice otomatis",
  feat_duitku1: "Catat pemasukan & pengeluaran",
  feat_duitku2: "Grafik keuangan interaktif",
  feat_duitku3: "Target tabungan & anggaran",
  feat_duitku4: "Kategorisasi transaksi otomatis",
  feat_duitku5: "Pengingat tagihan & cicilan",
  feat_duitku6: "Laporan bulanan komprehensif",
  feat_hr1: "Absensi via web & mobile",
  feat_hr2: "Rekap jam kerja otomatis",
  feat_hr3: "Laporan kehadiran bulanan",
  feat_hr4: "Manajemen izin & cuti online",
  feat_hr5: "Multi-departemen & jabatan",
  feat_hr6: "Keamanan data karyawan",

  // SERVICES – CTA
  svc_cta_h2: "Butuh Solusi Custom?",
  svc_cta_p: "Kami juga menerima proyek web app, mobile app, dan enterprise system sesuai kebutuhan spesifik Anda.",
  svc_cta_btn: "Diskusikan Kebutuhan Anda",

  // CONTACT – Hero
  contact_badge: "Hubungi Kami",
  contact_h1a: "Ada Pertanyaan atau",
  contact_h1b: "Proyek Baru?",
  contact_p: "Ceritakan kebutuhan Anda. Tim kami akan merespons dalam waktu 1x24 jam.",

  // CONTACT – Info
  contact_info_h2: "Informasi Kontak",
  contact_info_p: "Kami terbuka untuk diskusi, kolaborasi, dan konsultasi. Jangan ragu menghubungi kami melalui berbagai kanal berikut.",
  contact_label_email: "Email",
  contact_label_wa: "WhatsApp",
  contact_label_loc: "Lokasi",
  contact_consult_h3: "Konsultasi Gratis",
  contact_consult_p: "Tidak perlu bayar untuk diskusi pertama. Ceritakan ide ataupun permasalahan Anda dan kami bantu cari solusi terbaik yang sesuai budget.",

  // CONTACT – Form
  contact_form_h2: "Kirim Pesan",
  contact_form_name: "Nama Lengkap",
  contact_form_name_ph: "Contoh: Budi Santoso",
  contact_form_email: "Alamat Email",
  contact_form_email_ph: "Contoh: budi@email.com",
  contact_form_need: "Kebutuhan",
  contact_form_need_ph: "Pilih kebutuhan Anda...",
  contact_form_msg: "Pesan / Keterangan",
  contact_form_msg_ph: "Ceritakan lebih detail tentang proyek atau pertanyaan Anda...",
  contact_form_btn: "Kirim Pesan",
  contact_form_sending: "Mengirim...",
  contact_success_h3: "Pesan Terkirim!",
  contact_success_p: "Terima kasih sudah menghubungi kami. Tim DigiTechProject akan merespons dalam 1x24 jam.",
  contact_success_btn: "Kirim Pesan Lain",
  contact_error: "Gagal mengirim pesan. Silakan coba lagi atau hubungi via email.",

  // CONTACT – Validation
  val_name: "Nama wajib diisi",
  val_email_req: "Email wajib diisi",
  val_email_fmt: "Format email tidak valid",
  val_need: "Pilih kebutuhan Anda",
  val_msg: "Pesan wajib diisi",

  // CONTACT – Kebutuhan Options
  need_web: "Web Application",
  need_mobile: "Mobile App (Android/iOS)",
  need_enterprise: "Sistem Enterprise / ERP",
  need_pos: "POS",
  need_membership: "Membership",
  need_hris: "HRIS",
  need_wms: "WMS",
  need_social: "Social",
  need_consult: "Konsultasi Umum",
  need_other: "Lainnya",
} as const;

const en: Translations = {
  // NAVBAR
  nav_home: "Home",
  nav_services: "Services",
  nav_cta: "Contact Us",

  // FOOTER
  footer_tagline: "Affordable digital solutions for your business. We're here to turn your ideas into real products.",
  footer_menu: "Menu",
  footer_contact: "Contact",
  footer_visitors: "Visitors",
  footer_rights: "DigiTechProject. All rights reserved.",

  // HOME – Hero
  home_hero_badge: "Trusted Digital Solutions for Your Business",
  home_hero_h1a: "Turn Your Digital Ideas",
  home_hero_h1b: "Into Reality",
  home_hero_p: "DigiTechProject is your trusted technology partner — from web apps and mobile apps to enterprise systems. Professional, affordable, and on time.",
  home_hero_btn1: "Our Services",
  home_hero_btn2: "Free Consultation",

  // HOME – Stats
  home_stats_projects: "Projects Done",
  home_stats_clients: "Happy Clients",
  home_stats_products: "Key Products",
  home_stats_support: "Support",

  // HOME – Services
  home_svc_badge: "What We Offer",
  home_svc_h2: "Our Core Services",
  home_svc_p: "From concept to launch, we accompany every step of your digital journey.",
  home_svc1_title: "Web Application",
  home_svc1_desc: "Build modern, responsive, and scalable web apps tailored to your business needs.",
  home_svc2_title: "Mobile App",
  home_svc2_desc: "Intuitive Android & iOS apps to reach your customers anywhere.",
  home_svc3_title: "Enterprise System",
  home_svc3_desc: "Integrated business management systems — ERP, HRM, POS, and more.",

  // HOME – Products
  home_prod_badge: "Our Products",
  home_prod_h2: "Ready-to-Use Solutions for Your Business",
  home_prod_p: "Our products are specifically designed to meet the real needs of businesses.",
  home_prod1_tag: "POS & Retail",
  home_prod1_desc: "Complete digital POS system with inventory management, real-time sales reports, and multi-cashier support.",
  home_prod2_tag: "Personal Finance",
  home_prod2_desc: "Easy personal finance tracking app to manage your income and expenses effortlessly.",
  home_prod3_tag: "HR & Attendance",
  home_prod3_desc: "Web/mobile-based HR management system with automated attendance reports and leave management.",
  home_prod_learn: "Learn more",

  // HOME – Why Us
  home_why_badge: "Why Choose Us",
  home_why_h2a: "A Technology Partner",
  home_why_h2b: "You Can Rely On",
  home_why_p: "We're not just a tech vendor. We are a business partner who cares about your success. Every decision we make is based on quality, affordability, and trust.",
  home_why_c1: "Latest technology and best practices",
  home_why_c2: "Transparent pricing with no hidden fees",
  home_why_c3: "Revisions until you're satisfied",
  home_why_c4: "Long-term support & maintenance",
  home_why_r1_title: "Quality Assured",
  home_why_r1_desc: "Every product goes through rigorous testing before delivery.",
  home_why_r2_title: "Affordable Pricing",
  home_why_r2_desc: "Professional solutions without breaking the bank — suitable for SMEs to large enterprises.",
  home_why_r3_title: "On-Time Delivery",
  home_why_r3_desc: "Clear and transparent timeline — you always know the project progress.",
  home_why_r4_title: "Full Support",
  home_why_r4_desc: "Our team is ready to help before, during, and after the project.",

  // HOME – CTA
  home_cta_h2: "Ready to Start Your Digital Project?",
  home_cta_p: "Tell us your idea. First consultation is free and with no commitment.",
  home_cta_btn: "Contact Us Now",

  // SERVICES – Hero
  svc_badge: "Products & Services",
  svc_h1a: "Digital Solutions",
  svc_h1b: "We Deliver",
  svc_p: "Our three flagship products are designed to solve real business and everyday challenges — affordable and easy to use.",

  // SERVICES – Products
  svc_pos_subtitle: "Modern POS system for your retail business",
  svc_pos_desc: "Digitech Point Of Sales is a web-based Point of Sale system designed to streamline operations for shops, stalls, and retail businesses. Enjoy easy transactions, inventory management, and business reports in one integrated platform.",
  svc_duitku_subtitle: "Manage your finances more smartly",
  svc_duitku_desc: "Digitech Catatan Duitku is a personal finance management app that helps you record, analyze, and plan your finances easily. With a simple yet powerful interface, your finances become more organized.",
  svc_hr_subtitle: "Modern & efficient HR management system",
  svc_hr_desc: "Digitech HR is a cloud-based human resource management solution that simplifies attendance, leave, and employee data management. Suitable for small to medium businesses that want to manage HR more efficiently.",
  svc_ask_price: "Ask for Pricing",

  // SERVICES – Features
  feat_kasir1: "Fast & easy transactions",
  feat_kasir2: "Real-time inventory management",
  feat_kasir3: "Daily/monthly sales reports",
  feat_kasir4: "Multi-cashier & multi-outlet",
  feat_kasir5: "Product category management",
  feat_kasir6: "Automatic receipt & invoice printing",
  feat_duitku1: "Record income & expenses",
  feat_duitku2: "Interactive financial charts",
  feat_duitku3: "Savings goals & budgeting",
  feat_duitku4: "Automatic transaction categorization",
  feat_duitku5: "Bill & installment reminders",
  feat_duitku6: "Comprehensive monthly reports",
  feat_hr1: "Attendance via web & mobile",
  feat_hr2: "Automatic work hour recap",
  feat_hr3: "Monthly attendance reports",
  feat_hr4: "Online leave & permit management",
  feat_hr5: "Multi-department & position",
  feat_hr6: "Employee data security",

  // SERVICES – CTA
  svc_cta_h2: "Need a Custom Solution?",
  svc_cta_p: "We also take on web app, mobile app, and enterprise system projects tailored to your specific needs.",
  svc_cta_btn: "Discuss Your Needs",

  // CONTACT – Hero
  contact_badge: "Contact Us",
  contact_h1a: "Have a Question or",
  contact_h1b: "New Project?",
  contact_p: "Tell us your needs. Our team will respond within 24 hours.",

  // CONTACT – Info
  contact_info_h2: "Contact Information",
  contact_info_p: "We're open for discussions, collaborations, and consultations. Don't hesitate to reach out through the following channels.",
  contact_label_email: "Email",
  contact_label_wa: "WhatsApp",
  contact_label_loc: "Location",
  contact_consult_h3: "Free Consultation",
  contact_consult_p: "No payment needed for the first discussion. Tell us your idea or problem and we'll help find the best solution that fits your budget.",

  // CONTACT – Form
  contact_form_h2: "Send a Message",
  contact_form_name: "Full Name",
  contact_form_name_ph: "Example: John Doe",
  contact_form_email: "Email Address",
  contact_form_email_ph: "Example: john@email.com",
  contact_form_need: "Need",
  contact_form_need_ph: "Select your need...",
  contact_form_msg: "Message / Details",
  contact_form_msg_ph: "Tell us more about your project or question...",
  contact_form_btn: "Send Message",
  contact_form_sending: "Sending...",
  contact_success_h3: "Message Sent!",
  contact_success_p: "Thank you for contacting us. The DigiTechProject team will respond within 24 hours.",
  contact_success_btn: "Send Another Message",
  contact_error: "Failed to send message. Please try again or contact us via email.",

  // CONTACT – Validation
  val_name: "Name is required",
  val_email_req: "Email is required",
  val_email_fmt: "Invalid email format",
  val_need: "Please select your need",
  val_msg: "Message is required",

  // CONTACT – Kebutuhan Options
  need_web: "Web Application",
  need_mobile: "Mobile App (Android/iOS)",
  need_enterprise: "Enterprise System / ERP",
  need_pos: "POS",
  need_membership: "Membership",
  need_hris: "HRIS",
  need_wms: "WMS",
  need_social: "Social",
  need_consult: "General Consultation",
  need_other: "Other",
};

export const translations: Record<Lang, typeof id> = { id, en };
