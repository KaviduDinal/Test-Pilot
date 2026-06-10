import { NextResponse } from 'next/server';
import { createOrGetUser } from '@/lib/users';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { clerkUserId, email, name } = body;

    if (!clerkUserId) {
      return NextResponse.json({ error: 'Missing clerkUserId' }, { status: 400 });
    }

    const user = await createOrGetUser({ clerkUserId, email, name });
    return NextResponse.json({ user });
  } catch (err: any) {
    return NextResponse.json({ error: String(err?.message ?? err) }, { status: 500 });
  }
}
