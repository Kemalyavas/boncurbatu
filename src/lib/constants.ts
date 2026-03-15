import {
  MessageSquare,
  ClipboardList,
  Dumbbell,
  Trophy,
} from "lucide-react";

// ── Navbar Links ──
export const NAV_LINKS = [
  { label: "Hakkımda", href: "/#hakkimda" },
  { label: "Süreç", href: "/#surec" },
  { label: "Dönüşümler", href: "/#donusumler" },
  { label: "Paketler", href: "/#paketler" },
  { label: "SSS", href: "/#sss" },
  { label: "Blog", href: "/blog" },
];

// ── Social Links ──
export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/boncurbatu", icon: "instagram" },
  { label: "TikTok", href: "https://www.tiktok.com/@boncurbatuuu", icon: "tiktok" },
  { label: "YouTube", href: "https://youtube.com/@boncurbatu", icon: "youtube" },
];

// ── WhatsApp ──
export const WHATSAPP_URL = "https://wa.me/905XXXXXXXXX"; // Placeholder — Boncur'dan gelecek

// ── Hero ──
export const HERO = {
  title1: "VÜCUDUNU DÖNÜŞTÜR",
  title2: "HAYATINI",
  titleAccent: "DEĞİŞTİR",
  subtitle: "Kişiye özel antrenman ve beslenme programları ile hedeflerine ulaş.",
  cta: "Dönüşümüne Başla",
};

// ── About / Coach ──
export const ABOUT = {
  badge: "KOÇUN",
  name: "BATUHAN BALKIR",
  nickname: "BONCUR BATU",
  bio: "12 yaşında mahallemdeki küçük bir spor salonunda başladım. İlk iki yılım ne yapacağımı bilmeden geçti. Rastgele hareketler, anlamsız diyetler. Ama pes etmedim. Deneyimli abilerden öğrendim, doğru teknikleri kavradım ve bu sporu hayatımın merkezine koydum.",
  bio2: "Her planı bizzat kendim hazırlıyorum. Seni bir sayı olarak değil, bir birey olarak görüyorum. Kas kazanmak, yağ yakmak ya da sağlıklı bir yaşam tarzı edinmek, hedefin ne olursa olsun birlikte başaracağız.",
  stats: [
    { value: "500+", label: "Mutlu Danışan" },
    { value: "8+", label: "Yıl Deneyim" },
    { value: "550K", label: "Topluluk" },
  ],
};

// ── Process Steps ──
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "İletişim",
    description: "Bilgilerini paylaş, hedefini ve mevcut durumunu anlat.",
    icon: MessageSquare,
  },
  {
    number: "02",
    title: "Kişisel Plan",
    description: "48 saat içinde sana özel antrenman ve beslenme planın hazır.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Uygula & Takip",
    description: "Haftalık form kontrolleri ve gerektiğinde plan güncellemeleri.",
    icon: Dumbbell,
  },
  {
    number: "04",
    title: "Sonuç",
    description: "Hedefine ulaş, sürdürülebilir bir yaşam tarzı edin.",
    icon: Trophy,
  },
];

// ── Transformations (placeholder) ──
export const TRANSFORMATIONS = [
  {
    name: "Ahmet",
    quote: "12 haftada hayatım değişti. Sadece fiziksel değil, mental olarak da bambaşka bir insan oldum. Boncur'un planları gerçekten işe yarıyor.",
    duration: "12 haftalık dönüşüm",
    stars: 5,
  },
  {
    name: "Elif",
    quote: "İlk defa bir programa bu kadar bağlı kalabildim. Haftalık takipler motivasyonumu hep yüksek tuttu. 8 haftada hedefime ulaştım.",
    duration: "8 haftalık dönüşüm",
    stars: 5,
  },
  {
    name: "Mert",
    quote: "Daha önce birçok koçluk denedim ama hiçbiri bu kadar kişisel ve etkili olmamıştı. Sonuçlar ortada.",
    duration: "16 haftalık dönüşüm",
    stars: 5,
  },
];

// ── Pricing Packages ──
export const PACKAGES = [
  {
    name: "Başlangıç",
    duration: "8 Hafta",
    price: "X.XXX",
    description: "Spora yeni başlayanlar veya temelleri oturtmak isteyenler için.",
    features: [
      "Kişiye özel antrenman programı",
      "Temel beslenme planı",
      "Haftalık form kontrolü",
      "WhatsApp destek",
    ],
    featured: false,
  },
  {
    name: "Dönüşüm",
    duration: "12 Hafta",
    price: "X.XXX",
    description: "Ciddi bir dönüşüm hedefleyenler için tam kapsamlı program.",
    features: [
      "Tam kişiselleştirilmiş antrenman planı",
      "Detaylı makro bazlı beslenme planı",
      "Haftalık strateji görüşmeleri",
      "Supplement rehberliği",
      "Öncelikli WhatsApp destek",
    ],
    featured: true,
    badge: "En Popüler",
  },
  {
    name: "Elite",
    duration: "16 Hafta",
    price: "X.XXX",
    description: "Maksimum sonuç ve premium destek isteyenler için.",
    features: [
      "Her şey Dönüşüm paketinde dahil",
      "Aylık 1:1 görüntülü görüşme",
      "Gelişim takip dashboard'u",
      "Yaşam tarzı ve uyku optimizasyonu",
      "7/24 öncelikli destek",
    ],
    featured: false,
  },
];

// ── FAQ ──
export const FAQ_ITEMS = [
  {
    question: "Online koçluk nasıl işliyor?",
    answer: "Bilgilerini paylaştıktan sonra 48 saat içinde sana özel antrenman ve beslenme planını hazırlıyorum. Planını WhatsApp üzerinden iletiyorum ve haftalık form kontrolleriyle sürekli takip ediyorum.",
  },
  {
    question: "Planım ne zaman hazır?",
    answer: "Bilgilerini ve ödemeyi aldıktan sonra en geç 48 saat içinde planın hazır. Saat 20:00'den önce yapılan başvurular genellikle aynı gün cevaplanıyor.",
  },
  {
    question: "Haftalık takip nasıl yapılıyor?",
    answer: "Her Pazar günü form fotoğraflarını ve ölçümlerini paylaşıyorsun. Aynı gün içinde planında gerekli düzenlemeleri yapıp sana gönderiyorum.",
  },
  {
    question: "Paketler arasındaki fark ne?",
    answer: "Başlangıç paketi temel program ve takip sunar. Dönüşüm paketi daha detaylı beslenme ve strateji görüşmeleri içerir. Elite pakette aylık görüntülü görüşme ve 7/24 destek dahildir.",
  },
  {
    question: "Programa ara verebilir miyim?",
    answer: "Evet, sağlık sorunları veya özel durumlar için programa ara verebilirsin. Kalan süren dondurulur ve hazır olduğunda kaldığın yerden devam ederiz.",
  },
  {
    question: "Ödeme nasıl yapılıyor?",
    answer: "Kredi kartı veya banka kartıyla güvenli online ödeme yapabilirsin. Taksit seçenekleri de mevcuttur.",
  },
];
