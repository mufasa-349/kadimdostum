export default function PrivacyPolicy() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Gizlilik Politikası
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                Kadim Dostum uygulamasının gizlilik politikası ve veri koruma uygulamaları
              </p>
              <p className="text-sm text-gray-400">
                Son güncelleme tarihi: 2 Eylül 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="rounded-2xl bg-gray-900/50 border border-gray-800 p-8 space-y-8">
              
              <div>
                <p className="text-indigo-200/80 leading-relaxed">
                  Kadim Dostum, kullanıcılarının gizliliğine önem verir. Bu Gizlilik Politikası, 
                  uygulamanın hangi verileri topladığını, nasıl sakladığını, nasıl kullandığını 
                  ve kullanıcıların haklarını açıklamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">1. Toplanan Veriler</h2>
                <p className="text-indigo-200/80 mb-4">Uygulama, aşağıdaki veri kategorilerini toplayabilir:</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Kullanıcı Profili Bilgileri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Ad, e-posta adresi, üyelik türü (Free/Paid/Enterprise)</li>
                      <li>Google hesabı bilgileri (Google Sign-In kullanıldığında)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Sohbet ve Duygu Analizi Verileri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Sohbet mesajları ve geçmişi</li>
                      <li>Duygu analizi sonuçları (metin ve ses tabanlı)</li>
                      <li>Duygu etiketleri, trendler ve notlar</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Görev ve Hedef Verileri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Kullanıcı tarafından oluşturulan günlük görevler, hedefler ve ilerleme istatistikleri</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Kullanım ve Analitik Verileri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Uygulama kullanım istatistikleri</li>
                      <li>Duygu trendleri ve raporlar</li>
                      <li>Cihaz bilgileri (platform, işletim sistemi versiyonu, dil ayarları)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Terapi ve Destek Verileri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Terapi randevusu bilgileri</li>
                      <li>Kullanıcının talep ettiği içerikler ve öneriler</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Verilerin Kullanım Amaçları</h2>
                <p className="text-indigo-200/80 mb-4">Toplanan veriler şu amaçlarla kullanılmaktadır:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-2 ml-4">
                  <li>Yapay zeka destekli sohbet deneyimi sunmak</li>
                  <li>Duygu analizi yapmak ve kişiselleştirilmiş öneriler sağlamak</li>
                  <li>Kullanıcıların görev ve hedeflerini takip etmelerine yardımcı olmak</li>
                  <li>Kullanıcılara günlük ipuçları, motivasyon kartları ve bildirimler sunmak</li>
                  <li>Uygulama performansını iyileştirmek ve yeni özellikler geliştirmek</li>
                  <li>Kullanıcı desteği sağlamak (Free, Paid, Enterprise üyelik farklarıyla birlikte)</li>
                  <li>Güvenlik, dolandırıcılık önleme ve hesap koruması sağlamak</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Veri Saklama ve Güvenlik</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Veritabanı ve Depolama:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Sohbet mesajları, duygu analizleri, görevler ve kullanıcı verileri Firebase Firestore üzerinde saklanır.</li>
                      <li>Dosya saklama işlemleri Firebase Storage üzerinde yapılır.</li>
                      <li>Yerel ayarlar (tema, tercih edilen dil vb.) SharedPreferences ile cihazda saklanır.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Güvenlik Önlemleri:</h3>
                    <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                      <li>Firebase güvenlik kuralları uygulanmaktadır.</li>
                      <li>Kullanıcı bazlı veri erişim kontrolü yapılmaktadır.</li>
                      <li>Tüm veri iletimi SSL/TLS ile şifrelenmektedir.</li>
                      <li>API anahtarları güvenli yöntemlerle saklanır.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Üçüncü Taraf Servisler</h2>
                <p className="text-indigo-200/80 mb-4">Kadim Dostum aşağıdaki servislerle entegre çalışmaktadır:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>Firebase (Google): Kimlik doğrulama, veritabanı, dosya saklama, analitik</li>
                  <li>OpenAI API: Yapay zeka sohbeti (GPT-3.5) ve Text-to-Speech hizmeti</li>
                  <li>Google Sign-In ve Fonts API</li>
                  <li>Custom ML APIs: Duygu analizi (GoEmotions mBERT, SpeechBrain Wav2Vec2)</li>
                </ul>
                <p className="text-indigo-200/80 mt-4">
                  Bu servislerin gizlilik politikaları ilgili sağlayıcılar tarafından yönetilmektedir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Bildirimler</h2>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>Uygulama, flutter_local_notifications ile yerel bildirimler gönderir.</li>
                  <li>Bildirim tercihleri kullanıcı tarafından ayarlar menüsünden yönetilebilir.</li>
                  <li>Zaman dilimi desteği ile bildirimler doğru zamanda iletilir.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Kullanıcı Hakları</h2>
                <p className="text-indigo-200/80 mb-4">Kullanıcılar aşağıdaki haklara sahiptir:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>Kendi kişisel verilerine erişme</li>
                  <li>Sohbet geçmişi ve görevlerini silme</li>
                  <li>Profil bilgilerini güncelleme veya hesaplarını kapatma</li>
                  <li>Toplanan verilerin işlenmesine ilişkin bilgi talep etme</li>
                </ul>
                <p className="text-indigo-200/80 mt-4">
                  Bu haklar için e-posta ile bize yazabilirsiniz: <a href="mailto:mufasabozyel@gmail.com" className="text-indigo-400 hover:text-indigo-300">mufasabozyel@gmail.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Veri Saklama Süresi</h2>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>Sohbet mesajları, duygu analizleri ve görev verileri kullanıcı hesabı aktif olduğu sürece saklanır.</li>
                  <li>Kullanıcı hesabı silindiğinde, tüm veriler makul bir süre içinde kalıcı olarak silinir.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Çocukların Gizliliği</h2>
                <p className="text-indigo-200/80">
                  Kadim Dostum, 13 yaşın altındaki çocuklar için tasarlanmamıştır. Eğer yanlışlıkla böyle bir kayıt yapılırsa, 
                  hesap kapatılır ve veriler silinir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">9. Gizlilik Politikasındaki Değişiklikler</h2>
                <p className="text-indigo-200/80">
                  Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncellemeler uygulama içinde veya web sitemizde duyurulur: 
                  <a href="https://kadimdostum-5bqi.vercel.app" className="text-indigo-400 hover:text-indigo-300 ml-1">https://kadimdostum-5bqi.vercel.app</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">10. İletişim</h2>
                <p className="text-indigo-200/80 mb-4">Herhangi bir sorunuz veya talebiniz için bizimle iletişime geçebilirsiniz:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>E-posta: <a href="mailto:mufasabozyel@gmail.com" className="text-indigo-400 hover:text-indigo-300">mufasabozyel@gmail.com</a></li>
                  <li>Web sitesi: <a href="https://kadimdostum-5bqi.vercel.app" className="text-indigo-400 hover:text-indigo-300">https://kadimdostum-5bqi.vercel.app</a></li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-yellow-900/20 border border-yellow-500/30 rounded-lg">
                <p className="text-yellow-200/80 text-sm">
                  <strong>Not:</strong> Bu metin hukuki danışmanlık yerine geçmez. Uygulamanızın tabi olduğu yerel mevzuata göre ek hükümlere ihtiyaç duyabilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
