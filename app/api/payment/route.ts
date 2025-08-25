import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { plan, amount, currency = 'TRY', customerEmail } = body;

        // Burada gerçek ödeme işlemi entegrasyonu yapılacak
        // Örneğin: Stripe, PayPal, Iyzico gibi
        console.log('Ödeme isteği alındı:', { plan, amount, currency, customerEmail });

        // Simüle edilmiş başarılı ödeme
        const paymentResult = {
            success: true,
            transactionId: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            amount,
            currency,
            plan,
            customerEmail,
            timestamp: new Date().toISOString(),
            message: 'Ödeme başarıyla tamamlandı'
        };

        return NextResponse.json(paymentResult, { status: 200 });
    } catch (error) {
        console.error('Ödeme hatası:', error);
        return NextResponse.json(
            {
                success: false,
                error: 'Ödeme işlemi sırasında bir hata oluştu'
            },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json(
        {
            message: 'Kadim Dostum Ödeme API',
            version: '1.0.0',
            endpoints: {
                POST: '/api/payment - Yeni ödeme oluştur',
                GET: '/api/payment - API bilgileri'
            }
        }
    );
}
