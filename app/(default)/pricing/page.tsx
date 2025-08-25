"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const [loading, setLoading] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Kullanıcının giriş yapıp yapmadığını kontrol et
    // Bu kısım gerçek uygulamada JWT token veya session kontrolü ile yapılacak
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handlePlanSelection = async (plan: string, amount: number) => {
    if (!isLoggedIn) {
      // Giriş yapılmamışsa signin sayfasına yönlendir
      router.push('/signin');
      return;
    }

    // Giriş yapılmışsa ödeme sayfasına yönlendir
    router.push(`/payment?plan=${encodeURIComponent(plan)}&amount=${amount}`);
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Size Uygun Planı Seçin
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                Ruh sağlığınız için en uygun terapi planını seçin. Her plan kişiselleştirilmiş AI destekli terapi seansları içerir.
              </p>
            </div>
          </div>

          {/* Pricing tables */}
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Basic Plan */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Başlangıç</h3>
                  <div className="text-sm text-gray-400">Aylık</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₺199</span>
                  <span className="text-gray-400">/ay</span>
                </div>
                <p className="text-sm text-gray-400">
                  Kişisel terapi yolculuğunuza başlamak için ideal
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  4 AI Terapi Seansı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Günlük Mood Takibi
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Temel Terapi Teknikleri
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
                onClick={() => handlePlanSelection('Başlangıç', 199)}
                disabled={loading === 'Başlangıç'}
              >
                {loading === 'Başlangıç' ? 'İşleniyor...' : 'Planı Seç'}
              </button>
            </div>

            {/* Pro Plan */}
            <div className="relative rounded-2xl border-2 border-indigo-500 bg-gray-900/50 p-8">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-indigo-500 px-4 py-1 text-sm font-medium text-white">
                  En Popüler
                </span>
              </div>
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Profesyonel</h3>
                  <div className="text-sm text-gray-400">Aylık</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₺399</span>
                  <span className="text-gray-400">/ay</span>
                </div>
                <p className="text-sm text-gray-400">
                  Kapsamlı terapi desteği için en iyi seçim
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  8 AI Terapi Seansı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Gelişmiş Mood Analizi
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
                  Acil Durum Desteği
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  İlerleme Raporları
                </li>
              </ul>
              <button 
                className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                onClick={() => handlePlanSelection('Profesyonel', 399)}
                disabled={loading === 'Profesyonel'}
              >
                {loading === 'Profesyonel' ? 'İşleniyor...' : 'Planı Seç'}
              </button>
            </div>

            {/* Premium Plan */}
            <div className="relative rounded-2xl border border-gray-800 bg-gray-900/50 p-8">
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Premium</h3>
                  <div className="text-sm text-gray-400">Aylık</div>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">₺699</span>
                  <span className="text-gray-400">/ay</span>
                </div>
                <p className="text-sm text-gray-400">
                  Sınırsız terapi desteği ve özel hizmetler
                </p>
              </div>
              <ul className="mb-8 space-y-3 text-sm">
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Sınırsız AI Terapi Seansı
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  7/24 Canlı Destek
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Özel Terapi Uzmanı Eşleştirme
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Aile Terapisi Desteği
                </li>
                <li className="flex items-center text-gray-300">
                  <svg className="mr-3 h-4 w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Öncelikli Destek Hattı
                </li>
              </ul>
              <button 
                className="btn w-full bg-linear-to-t from-gray-700 to-gray-600 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                onClick={() => handlePlanSelection('Premium', 699)}
                disabled={loading === 'Premium'}
              >
                {loading === 'Premium' ? 'İşleniyor...' : 'Planı Seç'}
              </button>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              Tüm planlar 14 gün ücretsiz deneme içerir. İstediğiniz zaman iptal edebilirsiniz.
            </p>
            <div className="mt-6">
              <a href="/contact" className="text-indigo-400 hover:text-indigo-300">
                Özel planlar için bizimle iletişime geçin →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
