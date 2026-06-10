import { db, users } from '@/db';
import { eq } from 'drizzle-orm';

export async function createOrGetUser({
  clerkUserId,
  email,
  name,
}: {
  clerkUserId: string;
  email?: string | null;
  name?: string | null;
}) {
  const existing = await db.select().from(users).where(eq(users.clerkUserId, clerkUserId)).limit(1);
  if (existing.length) return existing[0];

  await db.insert(users).values({
    name: name ?? null,
    email: email ?? '',
    clerkUserId,
    credits: 0,
  });

  const created = await db.select().from(users).where(eq(users.clerkUserId, clerkUserId)).limit(1);
  return created[0] ?? null;
}

export async function getUserByClerkId(clerkUserId: string) {
  const found = await db.select().from(users).where(eq(users.clerkUserId, clerkUserId)).limit(1);
  return found[0] ?? null;
}
