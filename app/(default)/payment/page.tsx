"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function Payment() {
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const amount = searchParams.get('amount');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: ''
  });

  useEffect(() => {
    if (!plan || !amount) {
      setError('Plan bilgisi bulunamadı');
    }
  }, [plan, amount]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/iyzico-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          plan,
          amount: parseInt(amount || '0'),
          currency: 'TRY',
          customerEmail: formData.email,
          customerName: formData.name
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Iyzico checkout form'unu göster
        const formContainer = document.getElementById('iyzico-form');
        if (formContainer && result.checkoutFormContent) {
          formContainer.innerHTML = result.checkoutFormContent;
        }
      } else {
        setError('Ödeme başlatılamadı: ' + result.error);
      }
    } catch (error) {
      setError('Ödeme işlemi sırasında bir hata oluştu');
      console.error('Ödeme hatası:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!plan || !amount) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Hata</h1>
          <p className="text-gray-400">{error || 'Plan bilgisi bulunamadı'}</p>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
              Ödeme
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className="mb-8 text-xl text-indigo-200/65">
                {plan} planını seçtiniz. Güvenli ödeme ile terapi yolculuğunuza başlayın.
              </p>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Plan Summary */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="text-xl font-semibold text-white mb-4">Plan Özeti</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Plan:</span>
                    <span className="text-white font-medium">{plan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Tutar:</span>
                    <span className="text-white font-medium">₺{amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Periyot:</span>
                    <span className="text-white font-medium">Aylık</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Deneme:</span>
                    <span className="text-white font-medium">14 gün ücretsiz</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <div className="flex justify-between">
                    <span className="text-lg text-gray-300">Toplam:</span>
                    <span className="text-2xl font-bold text-indigo-400">₺{amount}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Güvenlik</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SSL şifreli güvenli ödeme
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Iyzico güvenlik standartları
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    KVKK uyumlu veri koruma
                  </li>
                </ul>
              </div>
            </div>

            {/* Payment Form */}
            <div className="space-y-6">
              <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <h3 className="text-xl font-semibold text-white mb-6">Ödeme Bilgileri</h3>
                
                {error && (
                  <div className="mb-4 p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-300">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-indigo-200/65 mb-2">
                      Ad Soyad <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-indigo-200/65 mb-2">
                      E-posta <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input w-full"
                      placeholder="E-posta adresiniz"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn w-full bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%] disabled:opacity-50"
                  >
                    {loading ? 'İşleniyor...' : 'Güvenli Ödeme ile Devam Et'}
                  </button>
                </form>
              </div>

              {/* Iyzico Form Container */}
              <div id="iyzico-form" className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6">
                <p className="text-center text-gray-400">
                  Ödeme bilgilerinizi girdikten sonra güvenli ödeme formu burada görünecektir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
