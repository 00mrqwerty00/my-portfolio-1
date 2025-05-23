import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inisialisasi Resend dengan API Key dari environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Email pengirim dari environment variables
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  const { email, subject, message } = await req.json();
  console.log("Menerima permintaan email:", { email, subject, message });

  try {
    const data = await resend.emails.send({
      from: `Form Portofolio <${fromEmail}>`,
      to: [fromEmail, email],
      subject: `Pesan dari Portofolio Anda: ${subject}`,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Halo,</p>
          <p>
            Anda telah menerima pesan baru dari formulir kontak di portofolio
            Anda.
          </p>
          <p>
            <strong>Dari:</strong> {email}
          </p>
          <p>
            <strong>Subjek:</strong> {subject}
          </p>
          <p>
            <strong>Pesan:</strong>
          </p>
          <p>{message}</p>
          <br />
          <p>Terima kasih telah menghubungi saya!</p>
        </>
      ),
    });

    console.log("Email berhasil dikirim:", data);
    return NextResponse.json(data);
  } catch (error) {
    console.error("Gagal mengirim email melalui Resend:", error);
    return NextResponse.json(
      { error: error.message || "Gagal mengirim email." },
      { status: 500 }
    );
  }
}
