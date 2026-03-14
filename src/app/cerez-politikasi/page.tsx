import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Çerez Politikası | Boncur Batu Koçluk",
};

export default function CerezPolitikasiPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ÇEREZ POLİTİKASI
          </h1>
          <div className="space-y-10 text-[var(--text-muted)] leading-relaxed text-base">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                1. ÇEREZ NEDİR?
              </h2>
              <p>
                Çerezler, web sitelerinin tarayıcınıza kaydettiği küçük metin dosyalarıdır. Siteyi bir sonraki ziyaretinizde sizi tanımak, tercihlerinizi hatırlamak ve site kullanımınızı analiz etmek için kullanılır.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                2. KULLANILAN ÇEREZ TÜRLERİ
              </h2>

              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text)] mb-1">Zorunlu Çerezler</h3>
                  <p className="text-[var(--text-dim)]">Sitenin düzgün çalışması için gereklidir. Oturum yönetimi ve güvenlik işlevlerini sağlar. Devre dışı bırakılamaz.</p>
                </div>

                <div className="p-4 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text)] mb-1">Analitik Çerezler</h3>
                  <p className="text-[var(--text-dim)]">Ziyaretçi sayısını ve site kullanım istatistiklerini anlamamıza yardımcı olur. Veriler anonim olarak toplanır.</p>
                </div>

                <div className="p-4 rounded-lg border border-[var(--border)]">
                  <h3 className="font-semibold text-[var(--text)] mb-1">İşlevsel Çerezler</h3>
                  <p className="text-[var(--text-dim)]">Dil tercihi ve tema gibi kişisel ayarlarınızı hatırlar. Bu çerezler olmadan bazı özellikler çalışmayabilir.</p>
                </div>
              </div>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                3. ÇEREZLERİ NASIL YÖNETEBİLİRSİNİZ?
              </h2>
              <p>
                Tarayıcı ayarlarınızdan çerezleri silebilir veya engelleyebilirsiniz. Ancak çerezleri devre dışı bırakmanız durumunda sitenin bazı özellikleri düzgün çalışmayabilir.
              </p>
              <p className="mt-2">Tarayıcı bazında çerez yönetimi:</p>
              <ul className="mt-2 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Chrome: Ayarlar &gt; Gizlilik ve güvenlik &gt; Çerezler</li>
                <li>Firefox: Ayarlar &gt; Gizlilik ve Güvenlik &gt; Çerezler</li>
                <li>Safari: Tercihler &gt; Gizlilik &gt; Çerezler</li>
                <li>Edge: Ayarlar &gt; Gizlilik &gt; Çerezler</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                4. ÜÇÜNCÜ TARAF ÇEREZLERİ
              </h2>
              <p>
                Sitemizde aşağıdaki üçüncü taraf hizmetlerinin çerezleri kullanılabilir:
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Google Analytics (site kullanım analizi)</li>
                <li>XXXXXXXXXXX (ödeme altyapısı)</li>
              </ul>
              <p className="mt-2">
                Bu hizmetlerin kendi gizlilik politikaları geçerlidir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                5. DEĞİŞİKLİKLER
              </h2>
              <p>
                Bu çerez politikası gerektiğinde güncellenebilir. Güncel versiyon her zaman bu sayfada yayınlanır.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                6. İLETİŞİM
              </h2>
              <p>
                Çerez politikamız hakkında sorularınız için <strong className="text-[var(--text)]">XXXXX@XXXXX.com</strong> adresine yazabilirsiniz.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
