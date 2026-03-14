import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boncur Batu Koçluk | Kişiye Özel Fitness Koçluğu",
  description:
    "Batuhan Balkır ile kişiye özel antrenman ve beslenme programları. Online fitness koçluğu ile hedeflerine ulaş.",
  keywords: [
    "fitness koçluk",
    "online antrenman",
    "beslenme programı",
    "boncur batu",
    "batuhan balkır",
    "kişisel antrenör",
  ],
  openGraph: {
    title: "Boncur Batu Koçluk | Kişiye Özel Fitness Koçluğu",
    description:
      "Batuhan Balkır ile kişiye özel antrenman ve beslenme programları.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${bebasNeue.variable} ${plusJakarta.variable}`}>
      <body className="grain">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
