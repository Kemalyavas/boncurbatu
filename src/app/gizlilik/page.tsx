import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Gizlilik Politikası | Boncur Batu Koçluk",
};

export default function GizlilikPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            GİZLİLİK POLİTİKASI
          </h1>
          <div className="space-y-10 text-[var(--text-muted)] leading-relaxed text-base">
            {/* 1 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                1. VERİ SORUMLUSU
              </h2>
              <p>
                Bu web sitesi, <strong className="text-[var(--text)]">XXXXXXX XXXXXXX</strong> (bundan sonra &quot;Boncur Batu Koçluk&quot; olarak anılacaktır) tarafından işletilmektedir.
              </p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Adres: XXXXXXXXXXXXXXXXXXXXXXXX</li>
                <li>E-posta: XXXXX@XXXXX.com</li>
                <li>Telefon: +90 XXX XXX XX XX</li>
              </ul>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                2. TOPLANAN KİŞİSEL VERİLER
              </h2>
              <p>Sitemizi kullanmanız sırasında aşağıdaki kişisel veriler toplanabilir:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Ad ve soyad</li>
                <li>E-posta adresi</li>
                <li>Telefon numarası</li>
                <li>Fiziksel ölçümler ve sağlık bilgileri (koçluk hizmeti kapsamında)</li>
                <li>Fotoğraflar (form takibi kapsamında)</li>
                <li>IP adresi ve tarayıcı bilgileri</li>
                <li>Çerez verileri</li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                3. VERİLERİN TOPLANMA AMACI
              </h2>
              <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Koçluk hizmetinin sunulması ve kişisel programların hazırlanması</li>
                <li>Hesap oluşturma ve kimlik doğrulama</li>
                <li>Sizinle iletişim kurulması</li>
                <li>Hizmet kalitesinin iyileştirilmesi</li>
                <li>Yasal yükümlülüklerin yerine getirilmesi</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                4. VERİLERİN SAKLANMA SÜRESİ
              </h2>
              <p>
                Kişisel verileriniz, hizmetin sona ermesinden itibaren yasal zorunluluklar çerçevesinde <strong className="text-[var(--text)]">XXXXX süre</strong> boyunca saklanır. Bu sürenin sonunda verileriniz silinir veya anonim hale getirilir.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                5. VERİLERİN PAYLAŞILMASI
              </h2>
              <p>Kişisel verileriniz, aşağıdaki durumlar dışında üçüncü kişilerle paylaşılmaz:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Yasal zorunluluklar (mahkeme kararı, savcılık talebi vb.)</li>
                <li>Ödeme işlemleri için ödeme hizmet sağlayıcıları</li>
                <li>Site barındırma ve teknik altyapı sağlayıcıları</li>
              </ul>
              <p className="mt-2">Verileriniz hiçbir koşulda pazarlama amacıyla üçüncü kişilere satılmaz.</p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                6. KVKK KAPSAMINDAKİ HAKLARINIZ
              </h2>
              <p>6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:</p>
              <ul className="mt-3 space-y-1 list-disc list-inside text-[var(--text-dim)]">
                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                <li>İşlenmişse buna ilişkin bilgi talep etme</li>
                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                <li>Kişisel verilerinizin silinmesini veya yok edilmesini isteme</li>
                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                <li>Kanuna aykırı işleme sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme</li>
              </ul>
              <p className="mt-3">
                Haklarınızı kullanmak için <strong className="text-[var(--text)]">XXXXX@XXXXX.com</strong> adresine yazabilirsiniz.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                7. GÜVENLİK
              </h2>
              <p>
                Kişisel verilerinizin güvenliği için SSL şifreleme, güvenli sunucu altyapısı ve erişim kontrolü gibi teknik ve idari tedbirler uygulanmaktadır.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl font-bold text-[var(--text)] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                8. DEĞİŞİKLİKLER
              </h2>
              <p>
                Bu gizlilik politikası gerektiğinde güncellenebilir. Değişiklikler bu sayfada yayınlanır. Önemli değişikliklerde e-posta ile bilgilendirme yapılır.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
