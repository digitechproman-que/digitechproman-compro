import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, kebutuhan, pesan } = await req.json();

    if (!name || !email || !kebutuhan || !pesan) {
      return NextResponse.json({ error: "Semua field wajib diisi" }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Format email tidak valid" }, { status: 400 });
    }

    await resend.emails.send({
      from: "DigiTechProject <onboarding@resend.dev>",
      to: ["digitechproman@gmail.com"],
      replyTo: email,
      subject: `[DigiTechProject] Pesan baru dari ${name} – ${kebutuhan}`,
      html: `
        <!DOCTYPE html>
        <html lang="id">
        <head>
          <meta charset="UTF-8" />
          <style>
            body { font-family: 'Inter', Arial, sans-serif; background: #f8fafc; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 32px auto; background: #fff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08); }
            .header { background: linear-gradient(135deg, #22c55e, #10b981); padding: 32px; text-align: center; }
            .header h1 { color: #fff; margin: 0; font-size: 24px; font-weight: 800; }
            .header p { color: rgba(255,255,255,0.85); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; }
            .field label { display: block; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #94a3b8; margin-bottom: 6px; }
            .field value { display: block; font-size: 15px; color: #1e293b; font-weight: 500; }
            .message-box { background: #f1fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin-top: 8px; }
            .message-box p { margin: 0; color: #166534; font-size: 14px; line-height: 1.7; white-space: pre-line; }
            .footer { padding: 20px 32px; background: #f8fafc; border-top: 1px solid #e2e8f0; text-align: center; }
            .footer p { color: #94a3b8; font-size: 12px; margin: 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>DigiTechProject</h1>
              <p>Pesan baru masuk melalui form Contact Us</p>
            </div>
            <div class="body">
              <div class="field">
                <label>Nama</label>
                <value>${name}</value>
              </div>
              <div class="field">
                <label>Email</label>
                <value>${email}</value>
              </div>
              <div class="field">
                <label>Kebutuhan</label>
                <value>${kebutuhan}</value>
              </div>
              <div class="field">
                <label>Pesan</label>
                <div class="message-box">
                  <p>${pesan.replace(/\n/g, "<br/>")}</p>
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Email ini dikirim dari form kontak website DigiTechProject &nbsp;•&nbsp; ${new Date().toLocaleDateString("id-ID", { dateStyle: "long" })}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Gagal mengirim email" }, { status: 500 });
  }
}
