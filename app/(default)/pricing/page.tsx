"use client";

import { useState } from 'react';

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);

  const handlePayment = async (plan: string, amount: number) => {
    setLoading(plan);
    
    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          amount,
          currency: 'TRY',
          customerEmail: 'demo@example.com' // Gerçek uygulamada kullanıcı email'i kullanılacak
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        alert(`Ödeme başarılı! İşlem ID: ${result.transactionId}`);
        // Başarılı ödeme sonrası yönlendirme yapılabilir
      } else {
        alert('Ödeme başarısız: ' + result.error);
      }
    } catch (error) {
      alert('Ödeme işlemi sırasında bir hata oluştu');
      console.error('Ödeme hatası:', error);
    } finally {
      setLoading(null);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Ruh Sağlığınız İçin En İyi Planı Seçin
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                AI destekli terapi ile ruh sağlığınızı destekleyin. Her plan kişiselleştirilmiş deneyim ve profesyonel destek sunar.
              </p>
            </div>
          </div>

          {/* Pricing tables */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Free Plan */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Ücretsiz Deneme</h3>
                  <div className="text-sm text-gray-400">Sınırlı</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₺0</span>
                  <span className="text-gray-400">/süresiz</span>
                </div>
                <p className="text-sm text-gray-400">
                  AI terapi deneyimini keşfetmek için mükemmel başlangıç
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  10 AI Terapi Mesajı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Temel Ruh Sağlığı Değerlendirmesi
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Günlük Mood Takip Aracı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Topluluk Destek Forumu
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Destek
                </li>
              </ul>
              <button 
                className="btn w-full bg-linear-to-t from-gray-700 to-gray-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                onClick={() => handlePayment('Ücretsiz', 0)}
                disabled={loading === 'Ücretsiz'}
              >
                {loading === 'Ücretsiz' ? 'İşleniyor...' : 'Ücretsiz Başla'}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-2xl border-2 border-indigo-500 bg-gray-900/50 p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-indigo-500 px-4 py-1 text-sm font-medium text-white">
                  En Popüler
                </span>
              </div>
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Premium</h3>
                  <div className="text-sm text-gray-400">Aylık</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₺99</span>
                  <span className="text-gray-400">/ay</span>
                </div>
                <p className="text-sm text-gray-400">
                  Sınırsız AI terapi ile ruh sağlığınızı sürekli destekleyin
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sınırsız AI Terapi Mesajı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gelişmiş Ruh Sağlığı Analizi
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kişiselleştirilmiş Terapi Programı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Detaylı İlerleme Raporları
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Acil Durum Desteği
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Öncelikli Müşteri Desteği
                </li>
              </ul>
              <button 
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                onClick={() => handlePayment('Premium', 99)}
                disabled={loading === 'Premium'}
              >
                {loading === 'Premium' ? 'İşleniyor...' : 'Premium Planı Seç'}
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Kurumsal</h3>
                  <div className="text-sm text-gray-400">Özel Plan</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">Özel</span>
                  <span className="text-gray-400">Fiyat</span>
                </div>
                <p className="text-sm text-gray-400">
                  Çalışanlarınızın ruh sağlığını takip edin ve destekleyin
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sınırsız Çalışan Erişimi
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Kurumsal Ruh Sağlığı Dashboard'u
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Çalışan Anonim Raporları
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  İş Yeri Ruh Sağlığı Eğitimleri
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Özel Kurumsal Destek Hattı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  API Entegrasyonu
                </li>
              </ul>
              <button 
                className="btn w-full bg-linear-to-t from-gray-700 to-gray-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                onClick={() => handlePayment('Kurumsal', 0)}
                disabled={loading === 'Kurumsal'}
              >
                {loading === 'Kurumsal' ? 'İşleniyor...' : 'Kurumsal Plan İste'}
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Premium plan 14 gün ücretsiz deneme içerir. Kurumsal planlar için özel fiyatlandırma yapılır.
            </p>
            <div className="mt-6">
              <a href="/contact" className="text-indigo-400 hover:text-indigo-300">
                Kurumsal planlar ve özel ihtiyaçlar için bizimle iletişime geçin →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
