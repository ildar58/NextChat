import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import prisma from './prisma';

export async function getAuthUser() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) return null;
  return prisma.user.findUnique({ where: { email: session.user.email } });
}
