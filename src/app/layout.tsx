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
    "boncurbatu",
    "batuhan balkır",
    "kişisel antrenör",
    "online fitness koçu",
    "kişiye özel antrenman programı",
    "online beslenme danışmanlığı",
  ],
  metadataBase: new URL("https://boncurbatu.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Boncur Batu Koçluk | Kişiye Özel Fitness Koçluğu",
    description:
      "Batuhan Balkır ile kişiye özel antrenman ve beslenme programları.",
    type: "website",
    locale: "tr_TR",
    siteName: "Boncur Batu Koçluk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boncur Batu Koçluk | Kişiye Özel Fitness Koçluğu",
    description:
      "Batuhan Balkır ile kişiye özel antrenman ve beslenme programları.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Boncur Batu Koçluk",
  description:
    "Batuhan Balkır ile kişiye özel online fitness koçluğu. Antrenman ve beslenme programları.",
  url: "https://boncurbatu.vercel.app",
  founder: {
    "@type": "Person",
    name: "Batuhan Balkır",
    alternateName: "Boncur Batu",
    jobTitle: "Fitness Koçu",
  },
  serviceType: "Online Fitness Koçluğu",
  areaServed: "TR",
  inLanguage: "tr",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${bebasNeue.variable} ${plusJakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="grain">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
