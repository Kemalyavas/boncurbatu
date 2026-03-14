import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Kullanım Koşulları | Boncur Batu Koçluk",
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            KULLANIM KOŞULLARI
          </h1>
          <div className="space-y-10 text-[var(--text-muted)] leading-relaxed text-base">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                1. GENEL HÜKÜMLER
              </h2>
              <p>
                Bu web sitesini (boncurbatu.com) kullanarak aşağıdaki koşulları kabul etmiş sayılırsınız. Bu koşulları kabul etmiyorsanız siteyi kullanmayınız.
              </p>
              <p className="mt-2">
                Site, <strong className="text-[var(--text)]">XXXXXXX XXXXXXX</strong> tarafından işletilmektedir.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                2. HİZMETİN TANIMI
              </h2>
              <p>
                Boncur Batu Koçluk, kişiye özel online fitness koçluğu hizmeti sunar. Hizmet kapsamında kişisel antrenman programı, beslenme planı ve haftalık takip yer alır. Tüm programlar bizzat Batuhan Balkır tarafından hazırlanır.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                3. KULLANICI SORUMLULUKLARI
              </h2>
              <ul className="space-y-2 list-disc list-inside text-[var(--text-dim)]">
                <li>Kayıt sırasında doğru ve güncel bilgi vermekle yükümlüsünüz.</li>
                <li>Hesap bilgilerinizin güvenliğinden siz sorumlusunuz.</li>
                <li>Sağlanan program ve içerikleri üçüncü kişilerle paylaşamazsınız.</li>
                <li>Siteyi yasalara aykırı amaçlarla kullanamazsınız.</li>
                <li>Mevcut sağlık sorunlarınızı koçluk hizmeti başlamadan önce bildirmeniz gerekmektedir.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                4. SAĞLIK UYARISI
              </h2>
              <p>
                Sunulan koçluk hizmeti tıbbi danışmanlık yerine geçmez. Herhangi bir sağlık sorununuz varsa programa başlamadan önce doktorunuza danışmanız önerilir. Boncur Batu Koçluk, sağlık sorunlarından kaynaklanan durumlardan sorumlu tutulamaz.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                5. FİKRİ MÜLKİYET HAKLARI
              </h2>
              <p>
                Sitedeki tüm içerik (metin, görsel, logo, tasarım, yazılım) Boncur Batu Koçluk&apos;a aittir ve telif hakkı ile korunmaktadır. İçeriklerin izinsiz kopyalanması, dağıtılması veya ticari amaçla kullanılması yasaktır.
              </p>
              <p className="mt-2">
                Size özel hazırlanan antrenman ve beslenme programları yalnızca sizin kullanımınız içindir. Bu programların üçüncü kişilere satılması veya paylaşılması halinde yasal işlem başlatılabilir.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                6. SORUMLULUK SINIRLAMASI
              </h2>
              <p>
                Boncur Batu Koçluk, hizmetin kesintisiz veya hatasız olacağını garanti etmez. Teknik arızalar, bakım çalışmaları veya mücbir sebepler nedeniyle hizmette geçici kesintiler yaşanabilir.
              </p>
              <p className="mt-2">
                Programlara uyum ve sonuçlar kişiden kişiye değişir. Belirli bir sonuç garanti edilmez.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                7. HESAP FESHİ
              </h2>
              <p>
                Kullanım koşullarını ihlal etmeniz durumunda hesabınız önceden bildirimde bulunulmaksızın askıya alınabilir veya kapatılabilir.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                8. UYGULANACAK HUKUK
              </h2>
              <p>
                Bu koşullar Türkiye Cumhuriyeti kanunlarına tabidir. Uyuşmazlıklarda <strong className="text-[var(--text)]">XXXXXXX</strong> mahkemeleri ve icra daireleri yetkilidir.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                9. DEĞİŞİKLİKLER
              </h2>
              <p>
                Bu koşullar gerektiğinde güncellenebilir. Güncel versiyon her zaman bu sayfada yayınlanır.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                10. İLETİŞİM
              </h2>
              <p>Sorularınız için bizimle iletişime geçebilirsiniz:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>E-posta: XXXXX@XXXXX.com</li>
                <li>Telefon: +90 XXX XXX XX XX</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
