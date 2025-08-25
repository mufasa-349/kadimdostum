import { NextRequest, NextResponse } from 'next/server';
import Iyzipay from 'iyzipay';

// Iyzico konfigürasyonu
const iyzipay = new Iyzipay({
  apiKey: process.env.IYZICO_API_KEY || '',
  secretKey: process.env.IYZICO_SECRET_KEY || '',
  uri: process.env.IYZICO_BASE_URL || 'https://sandbox-api.iyzipay.com'
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, amount, currency = 'TRY', customerEmail, customerName } = body;

    // Ödeme için benzersiz ID oluştur
    const conversationId = `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    const price = amount.toString();

    // Iyzico ödeme isteği
    const request = {
      locale: 'tr',
      conversationId: conversationId,
      price: price,
      paidPrice: price,
      currency: currency,
      basketId: `basket_${Date.now()}`,
      paymentGroup: 'SUBSCRIPTION',
      callbackUrl: `${process.env.NEXT_PUBLIC_BASE_URL}/payment/success`,
      enabledInstallments: [1, 2, 3, 6, 9],
      buyer: {
        id: `user_${Date.now()}`,
        name: customerName || 'Kullanıcı',
        surname: 'Kullanıcı',
        gsmNumber: '+905350000000',
        email: customerEmail,
        identityNumber: '74300864791',
        lastLoginDate: new Date().toISOString(),
        registrationDate: new Date().toISOString(),
        registrationAddress: 'Test Mahallesi Test Sokak',
        ip: '85.34.78.112',
        city: 'Istanbul',
        country: 'Turkey',
        zipCode: '34732'
      },
      shippingAddress: {
        contactName: customerName || 'Kullanıcı',
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Test Mahallesi Test Sokak',
        zipCode: '34742'
      },
      billingAddress: {
        contactName: customerName || 'Kullanıcı',
        city: 'Istanbul',
        country: 'Turkey',
        address: 'Test Mahallesi Test Sokak',
        zipCode: '34742'
      },
      basketItems: [
        {
          id: `plan_${plan.toLowerCase()}`,
          name: `Kadim Dostum - ${plan} Planı`,
          category1: 'Terapi',
          category2: 'Yapay Zeka',
          itemType: 'VIRTUAL',
          price: price
        }
      ]
    };

    // Iyzico checkout form oluştur
    iyzipay.checkoutFormInitialize.create(request, function (err: any, result: any) {
      if (err) {
        console.error('Iyzico hatası:', err);
        return NextResponse.json(
          { success: false, error: 'Ödeme formu oluşturulamadı' },
          { status: 500 }
        );
      }

      if (result.status === 'success') {
        return NextResponse.json({
          success: true,
          checkoutFormContent: result.checkoutFormContent,
          token: result.token,
          conversationId: conversationId
        });
      } else {
        return NextResponse.json(
          { success: false, error: 'Ödeme formu oluşturulamadı' },
          { status: 500 }
        );
      }
    });

  } catch (error) {
    console.error('Ödeme hatası:', error);
    return NextResponse.json(
      { success: false, error: 'Ödeme işlemi sırasında bir hata oluştu' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Kadim Dostum Iyzico Ödeme API',
    version: '1.0.0',
    endpoints: {
      POST: '/api/iyzico-payment - Yeni ödeme oluştur',
      GET: '/api/iyzico-payment - API bilgileri'
    }
  });
}
