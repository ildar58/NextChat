import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './lib/auth';

export async function middleware(req: NextRequest) {
  if (!req.nextUrl.pathname.startsWith('/api/secure')) return NextResponse.next();
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.next();
}
