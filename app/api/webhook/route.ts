import { NextResponse } from 'next/server';
import { createHmac, timingSafeEqual } from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function verifySignature(payloadText: string, signatureHeader: string, secret: string): boolean {
  const hmac = createHmac('sha256', secret);
  hmac.update(payloadText, 'utf8');
  const expected = `sha256=${hmac.digest('hex')}`;
  const expectedBuffer = Buffer.from(expected, 'utf8');
  const receivedBuffer = Buffer.from(signatureHeader, 'utf8');
  if (expectedBuffer.length !== receivedBuffer.length) {
    return false;
  }
  return timingSafeEqual(expectedBuffer, receivedBuffer);
}

export async function POST(request: Request) {
  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    return NextResponse.json({ error: 'Server not configured' }, { status: 500 });
  }

  const signatureHeader = request.headers.get('x-hub-signature-256');
  if (!signatureHeader) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 });
  }

  const event = request.headers.get('x-github-event') ?? 'unknown';
  const delivery = request.headers.get('x-github-delivery') ?? 'unknown';

  const rawBody = await request.text();
  const valid = verifySignature(rawBody, signatureHeader, secret);

  if (!valid) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
  }

  // Optionally parse and act on the event
  // const payload = JSON.parse(rawBody);

  return NextResponse.json({ ok: true, event, delivery });
}


