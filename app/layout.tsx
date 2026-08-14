import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Amiri } from "next/font/google";

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});
const tajawal = Tajawal({
  subsets: ["arabic"],

  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "سفيان ❤️ أميرة | دعوة زفاف",

  description: "دعوة زفاف سفيان وأميرة يوم 24 أكتوبر 2026",

  keywords: ["Wedding", "سفيان", "أميرة", "دعوة زفاف"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={amiri.className}>{children}</body>
    </html>
  );
}
