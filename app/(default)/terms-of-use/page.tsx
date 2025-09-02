export default function TermsOfUse() {
  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Kullanım Koşulları
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                Kadim Dostum uygulamasının kullanım koşulları ve hizmet şartları
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
                <h2 className="text-2xl font-semibold text-white mb-4">1. Hizmetin Niteliği</h2>
                <p className="text-indigo-200/80 leading-relaxed">
                  Kadim Dostum, yapay zeka destekli bir ön-destek ve farkındalık uygulamasıdır.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  <strong className="text-yellow-400">Önemli:</strong> Gerçek terapi, tıbbi teşhis veya profesyonel psikolojik danışmanlık yerine geçmez.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  Uygulama yalnızca bilgilendirme, farkındalık yaratma ve kişisel gelişim amaçlıdır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">2. Yasal ve Tıbbi Sorumluluk Reddi</h2>
                <div className="space-y-4">
                  <p className="text-indigo-200/80 leading-relaxed">
                    Kadim Dostum'un sağladığı içerikler tıbbi tavsiye değildir.
                  </p>
                  <div className="p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                    <p className="text-red-200/80 font-medium">
                      <strong>Acil Durum Uyarısı:</strong> Acil bir durumdaysanız, bulunduğunuz ülkedeki acil yardım numaralarını aramalı veya profesyonel sağlık hizmetine başvurmalısınız.
                    </p>
                  </div>
                  <p className="text-indigo-200/80 leading-relaxed">
                    Uygulamanın geliştiricileri ve hizmet sağlayıcıları, uygulamanın kullanımı sonucu doğabilecek herhangi bir doğrudan veya dolaylı zarardan sorumlu tutulamaz.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">3. Kullanıcı Yükümlülükleri</h2>
                <p className="text-indigo-200/80 mb-4">Kullanıcılar:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-2 ml-4">
                  <li>Hesap bilgilerini doğru ve güncel tutmakla,</li>
                  <li>Uygulamayı yasalara aykırı biçimde kullanmamakla,</li>
                  <li>Başka kullanıcıların güvenliğini ve gizliliğini ihlal etmemekle yükümlüdür.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">4. Üyelik ve Kullanım Şartları</h2>
                <div className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                      <h3 className="text-lg font-medium text-white mb-2">Ücretsiz Üyelik</h3>
                      <p className="text-indigo-200/80">10 mesaj hakkı</p>
                    </div>
                    <div className="p-4 bg-indigo-800/50 rounded-lg border border-indigo-700">
                      <h3 className="text-lg font-medium text-white mb-2">Ücretli Üyelik</h3>
                      <p className="text-indigo-200/80">30 gün boyunca sınırsız mesaj</p>
                    </div>
                    <div className="p-4 bg-purple-800/50 rounded-lg border border-purple-700">
                      <h3 className="text-lg font-medium text-white mb-2">Kurumsal Üyelik</h3>
                      <p className="text-indigo-200/80">Çalışan bazlı sınırsız mesaj ve öncelikli destek</p>
                    </div>
                  </div>
                  <p className="text-indigo-200/80">
                    Mesaj limitleri, analiz özellikleri ve destek seçenekleri üyelik türüne göre değişiklik gösterebilir.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">5. Veri Toplama ve Gizlilik</h2>
                <p className="text-indigo-200/80 leading-relaxed">
                  Kullanıcı verileri, Gizlilik Politikası'nda belirtildiği şekilde toplanır ve işlenir.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  Kullanıcı, uygulamayı kullanarak Gizlilik Politikası'ni da kabul etmiş olur.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">6. Fikri Mülkiyet Hakları</h2>
                <p className="text-indigo-200/80 leading-relaxed">
                  Uygulamanın marka, logo, yazılım kodu ve içeriklerinin tüm hakları Kadim Dostum geliştiricilerine aittir.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  İzinsiz kopyalama, dağıtım veya ticari kullanım yasaktır.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">7. Hizmet Değişiklikleri ve Sona Erdirme</h2>
                <p className="text-indigo-200/80 leading-relaxed">
                  Kadim Dostum, hizmetleri dilediği zaman değiştirme, güncelleme veya sona erdirme hakkını saklı tutar.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  Kullanıcılar, üyeliklerini istedikleri zaman sonlandırabilir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">8. Uygulanacak Hukuk</h2>
                <p className="text-indigo-200/80 leading-relaxed">
                  Bu Kullanım Koşulları, Türkiye Cumhuriyeti yasalarına tabidir.
                </p>
                <p className="text-indigo-200/80 leading-relaxed mt-4">
                  Doğabilecek uyuşmazlıklarda İstanbul mahkemeleri ve icra daireleri yetkilidir.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">9. İletişim</h2>
                <p className="text-indigo-200/80 mb-4">Herhangi bir sorunuz için:</p>
                <ul className="list-disc list-inside text-indigo-200/80 space-y-1 ml-4">
                  <li>E-posta: <a href="mailto:mufasabozyel@gmail.com" className="text-indigo-400 hover:text-indigo-300">mufasabozyel@gmail.com</a></li>
                  <li>Web sitesi: <a href="https://kadimdostum-5bqi.vercel.app" className="text-indigo-400 hover:text-indigo-300">https://kadimdostum-5bqi.vercel.app</a></li>
                </ul>
              </div>

              <div className="mt-8 p-4 bg-blue-900/20 border border-blue-500/30 rounded-lg">
                <p className="text-blue-200/80 text-sm">
                  <strong>Kabul:</strong> Bu uygulamayı kullanarak yukarıdaki tüm koşulları kabul etmiş sayılırsınız. 
                  Koşulları kabul etmiyorsanız, lütfen uygulamayı kullanmayınız.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
