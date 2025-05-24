import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Portfolio", // Ganti judulnya
  description: "A personal portfolio showcasing my cybersecurity skills.", // Ganti deskripsinya
  // === PENTING: Tambahkan ini ===
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1, // Opsional: mencegah user zoom terlalu jauh
    userScalable: false, // Opsional: mencegah user zoom (pertimbangkan aksesibilitas)
  },
  // Atau versi lebih sederhana:
  // viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
